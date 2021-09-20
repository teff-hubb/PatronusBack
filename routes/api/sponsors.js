const { totalParticipations, updateParticipations } = require('../../models/athlete.model');
const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, offerById, deleteAccount, editSponsor, editUser, getAll, getAthleteById, orderByPercentage, orderByLimitdate, newOffer, getById, getInvertible, getAthletesBySport, getAthletesByCountry, getCountries, getSports, getNoInvertibles, addFavorite, revertFavorite } = require('../../models/sponsor.model');

const router = require('express').Router();

const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });


// todos los deportistas

router.get('/allAthletes', async (req, res) => {
    try {
        const result = await getAll();
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

// ver atletas ordenados por fecha de expiración

router.get('/athletesLimitdate', async (req, res) => {
    const result = await orderByLimitdate();
    res.json(result);
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







// ver todos

router.get('/athletes/filterCountry/:nameCountry', async (req, res) => {
    try {
        const nameCountry = req.params.nameCountry;// extraer el nombre del pais de la ruta
        const result = await getAthletesByCountry(nameCountry);
        res.json(result);

    } catch (err) {
        res.json({ error: err.message });
    }
});


router.get('/athletes/filterSport/:nameSport', async (req, res) => {
    try {
        const nameSport = req.params.nameSport;
        const result = await getAthletesBySport(nameSport);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });

    }
});



router.get('/athletes/countries', async (req, res) => {
    const result = await getCountries();
    console.log(result);
    res.json(result);
});


router.get('/athletes/sports', async (req, res) => {
    const result = await getSports();
    res.json(result);
});

router.get('/athletes/invertibles', async (req, res) => {
    const result = await getInvertible();
    res.json(result);
    console.log(result);
});


router.get('/athletes/noInvertibles', async (req, res) => {
    const result = await getNoInvertibles();
    res.json(result);
    console.log(result);
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




// sponsor por Id 

router.get('/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await getById(idSponsor);
    res.json(result);
    console.log(result);
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

router.put('/profile/:idSponsor', upload.single('logo'), async (req, res) => {
    // console.log(req.body, req.file);
    const extension = '.' + req.file.mimetype.split('/')[1];
    const newName = req.file.filename + extension;
    const path = req.file.path + extension;
    fs.renameSync(req.file.path, path);
    req.body.logo = req.file.path + newName;
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

router.put('/deleteAccount/:idSponsor', async (req, res) => {
    try {
        const idSponsor = req.params.idSponsor;
        const result = await deleteAccount(idSponsor);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})




// añadir favorito 

router.post('/addAthleteFavorite/:idAthlete', async(req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await addFavorite(idAthlete, req.body);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});


// quitar favorito 

router.put('/removeAthleteFavorite/:idAthlete', async(req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await revertFavorite(idAthlete, req.body);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});



module.exports = router;