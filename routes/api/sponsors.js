const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile, getById, offerById } = require('../../models/sponsor.model');
const { newOffer } = require('../../models/user.model');

const router = require('express').Router();




// deportistas invertidos

router.get('/myathletes/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await getMyAthletes(idSponsor);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});



// todas las ofertas realizadas 

router.get('/myAllOffers/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await getMyAllOffers(idSponsor);
        res.json(result);
    } catch (error) {
        res.json({error: err.message});
    }
})


// todas las ofertas rechazadas 

router.get('/myOffersRejecteds/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await getMyOffersRejecteds(idSponsor);
        res.json(result);
    } catch (error) {
        res.json({error: err.message});
    }
})


router.get('/offer/:idOffer', async (req, res) => {
    try {
        const idOffer = req.params.idOffer;
        const result = await offerById(idOffer);
        console.log(result)
        res.json(result);
    } catch (error) {
        res.json({error: err.message});
    }
})


// nueva oferta

router.post('/newOffer', async (req, res) => {
    try {
        const result = await newOffer(req.body);
        res.json(result);
    } catch (error) {
        res.json({error: err.message});
    }
})



// editar perfil 

router.put('/profile/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await editProfile(idSponsor, req.body);
        const sponsor = await getById(idSponsor);
        res.json(sponsor);
    } catch (error) {
        res.json({error: err.message});
    }
});





module.exports = router;