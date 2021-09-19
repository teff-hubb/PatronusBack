const router = require('express').Router();


const { getById, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors, deleteAccount, editDatesAthlete, editDatesUser, acceptOffer } = require('../../models/athlete.model');
const { route } = require('./sponsors');


// ver todos

router.get('/country/:nameCountry', async (req, res) => {
    
    try {
        const nameCountry = req.params.nameCountry;// extraer el nombre del pais de la ruta
        const result = await getCountry(nameCountry);
        res.json(result);

    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/sport/:nameSport', async (req, res) => {

    try {
        const nameSport = req.params.nameSport;
        const result = await getSport(nameSport);
        res.json(result);

    } catch (err) {
        res.json({ error: err.message });

    }
});

router.get('/invertibles', async (req, res) => {
    
    const result = await getInvertible();
    res.json(result);
});








// ver todas las ofertas recibidas

router.get('/allOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getAllOffers(idAthlete);
        res.json(result);
    } catch (err) {
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
    } catch (err) {
        res.json({error: err.message})
    }
})


// ver todas las ofertas que ha rechazado

router.get('/rejectedOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getOffersRejecteds(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
})


// ver todas las ofertas que está a la espera de responder

router.get('/holdOffers/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getOffersWaiting(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
})


// ver mis sponsors - ver todas las ofertas aceptadas

router.get('/mysponsors/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getMySponsors(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
})



router.put('/acceptOffer', async (req, res) => {
    const result = await acceptOffer(req.body.id);
    res.json(result);
})




// editar perfil

router.put('/profile/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const athleteChanged = await editDatesAthlete(idAthlete, req.body);
        const userChanged = await editDatesUser(idAthlete, req.body.email);
        const athlete = await getById(idAthlete);
        res.json(athlete);
    } catch (err) {
        res.json({error: err.message})
    }
})



router.put('/deleteaccount/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await deleteAccount(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})







module.exports = router;
