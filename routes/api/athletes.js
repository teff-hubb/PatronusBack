const router = require('express').Router();


const { getAll, getOffers, editProfile, getById, getAllOffers, getCountry, getSport, getInvertible, } = require('../../models/athlete.model');


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
