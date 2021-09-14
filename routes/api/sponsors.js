const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile, getById, offerById } = require('../../models/sponsor.model');
const { newOffer } = require('../../models/user.model');

const router = require('express').Router();


router.get('/offers', (req, res) => {
    res.end('ruta get offers funcionando')
});


// deportistas invertidos

router.get('/myathletes/:idSponsor', async (req, res) => {
   const idSponsor = req.params.idSponsor;
   const result = await getMyAthletes(idSponsor);
   res.json(result);
});



// todas las ofertas realizadas 

router.get('/myAllOffers/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await getMyAllOffers(idSponsor);
    res.json(result);
})


// todas las ofertas rechazadas 

router.get('/myOffersRejecteds/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await getMyOffersRejecteds(idSponsor);
    res.json(result);
})


router.get('/offer/:idOffer', async (req, res) => {
    const idOffer = req.params.idOffer;
    const result = await offerById(idOffer);
    console.log(result)
    res.json(result);
})


// nueva oferta

router.post('/newOffer', async (req, res) => {
    const result = await newOffer(req.body);
    res.json(result);
})



// editar perfil 

router.put('/profile/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await editProfile(idSponsor, req.body);
    const sponsor = await getById(idSponsor);
    res.json(sponsor);
});









module.exports = router;