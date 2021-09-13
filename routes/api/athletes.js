const router = require('express').Router();


const { getAll, editProfile, getById, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors } = require('../../models/athlete.model');


// ver todos

router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
})


// ver un atleta 

router.get('/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getById(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
});


// ver todas las ofertas recibidas

router.get('/allOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getAllOffers(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
});


// ver todas las ofertas (el histórico total)
// ¿Las ordenamos por a la espera - aceptadas y rechazadas?

router.get('/offers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getOffersWaiting(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
})


// ver todas las ofertas que ha rechazado

router.get('/rejectedOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getOffersRejecteds(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
})


// ver todas las ofertas que está a la espera de responder

router.get('/holdOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getOffersWaiting(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
})


// ver mis sponsors - ver todas las ofertas aceptadas

router.get('/mysponsors/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getMySponsors(idAthlete);
        res.json(result);
    } catch (error) {
        res.json({error: err.message})
    }
})


// editar perfil

router.put('/profile/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await editProfile(idAthlete, req.body);
        const athlete = await getById(idAthlete);
        res.json(athlete);
    } catch (error) {
        res.json({error: err.message})
    }
})





module.exports = router;
