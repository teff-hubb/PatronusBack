const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile, getById } = require('../../models/sponsor.model');

const router = require('express').Router();

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


// editar perfil 

router.put('/profile/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await editProfile(idSponsor, req.body);
    const sponsor = await getById(idSponsor);
    res.json(sponsor);
});









module.exports = router;