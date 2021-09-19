const { sumParticipations, totalParticipations, updateParticipations } = require('../../models/athlete.model');
const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, getById, offerById, deleteAccount, editSponsor, editUser, getAll, getAthleteById, orderByPercentage, orderByLimitdate, newOffer } = require('../../models/sponsor.model');

const router = require('express').Router();



// todos los deportistas

router.get('/allAthletes', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});


// ver un atleta 

router.get('/athletes/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getAthleteById(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
});



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
    } catch (err) {
        res.json({error: err.message});
    }
})


// todas las ofertas rechazadas 

router.get('/myOffersRejecteds/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await getMyOffersRejecteds(idSponsor);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})


router.get('/offer/:idOffer', async (req, res) => {
    try {
        const idOffer = req.params.idOffer;
        const result = await offerById(idOffer);
        console.log(result)
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})


// nueva oferta

router.post('/newOffer/:idSponsor', async (req, res) => {
    try {
        const fk_sponsors = req.params.idSponsor;
        const result = await newOffer(fk_sponsors, req.body);
        const sumParticipations = await totalParticipations(req.body.fk_athletes);
        console.log('Esto es sumParticipations', sumParticipations);
        const participationsTotal = JSON.parse(sumParticipations[0]);
        console.log('Esto es sumParticipations', participationsTotal);
        // const participations = await updateParticipations(sumParticipations, req.body.fk_athletes);
        // console.log(participations);
        // const percentage = await updatePercentage(req.body.fk_athletes, participations)
        // const result = await get,,,,athlete by id
        // res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})



// editar perfil 

router.put('/profile/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const sponsorChanged = await editSponsor(idSponsor, req.body);
        const userChanged = await editUser(idSponsor, req.body);
        const sponsor = await getById(idSponsor);
        res.json(sponsor);
    } catch (err) {
        res.json({error: err.message});
    }
});


// darse de baja

router.put('/deleteaccount/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await deleteAccount(idSponsor);
        console.log(result);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})


// ver atletas ordenados por porcentaje 

router.get('/athletesPercentage', async (req, res) => {
    try {
        const result = await orderByPercentage();
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})



// ver atletas ordenados por fecha de expiración

router.get('/athletesLimitdate', async (req, res) => {
    const result = await orderByLimitdate();
    res.json(result);
})


module.exports = router;