const router = require('express').Router();


const { getAll, getOffers, editProfile, getById, getAllOffers } = require('../../models/athlete.model');


// ver todos

router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
})


// ver todas las ofertas recibidas

router.get('/offers', async (req, res) => {
    const result = await getAllOffers();
    res.json(result);
});


// editar perfil

router.put('/:idAthlete', async (req, res) => {
    const idAthlete = req.params.idAthlete;
    const result = await editProfile(idAthlete, req.body);
    const athlete = await getById(idAthlete);
    res.json(athlete);
})





module.exports = router;
