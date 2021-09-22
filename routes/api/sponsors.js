const { totalParticipations, updateParticipations, updatePercentage } = require('../../models/athlete.model');
const { getMyAthletes, getMyAllOffers, getMyOffersRejecteds, offerById, deleteAccount, editSponsor, editUser, getAll, getAthleteById, orderByPercentage, orderByLimitdate, newOffer, getById, getInvertible, getAthletesBySport, getAthletesByCountry, getCountries, getSports, getNoInvertibles, getSportsSponsors, getFavoriteSportsSponsors, addAthleteFavorite, addSportFavorite, getMyAthletesFavorites } = require('../../models/sponsor.model');

const router = require('express').Router();

const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });

const nodemailer = require("nodemailer");


router.post("/send-email", (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "dedric.moen56@ethereal.email",
            pass: "79VFVym4kFZdjcj4Sk"
        }
    });
    
    let mailOptions = {
        from: "Patronus",
        to: "patronus.spain@gmail.com",
        subject: "Enviado desde nodemailer",
        text: "Hola Mundo!"
    }
    
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado.");
            res.status(200).jsonp(req.body);
        }
    })
});




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


// recuperar atletas favoritos 

router.get('/myFavorites/:idSponsor', async(req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await getMyAthletesFavorites(idSponsor);
    res.json(result);
})



router.get('/sportsSponsors', async (req, res) => {
    const result = await getSportsSponsors();
    res.json(result);
})

router.get('/sportsBySponsor/:idSponsor', async (req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await getFavoriteSportsSponsors(idSponsor);
    res.json(result);
})



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
        const sumParticipationsNumber = Number(sumParticipations[0].total);
        const quantityDemand = 1000 - sumParticipationsNumber;
        const participations = await updateParticipations(quantityDemand, req.body.fk_athletes);
        const percentageTotal = sumParticipationsNumber * 0.1;
        const percentage = await updatePercentage(percentageTotal, req.body.fk_athletes)
        res.json(percentage);
    } catch (err) {
        res.json({error: err.message});
    }
})



// añadir favorito 

router.post('/addAthleteFavorite/:idAthlete', async(req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await addAthleteFavorite(idAthlete, req.body);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});



// añadir un deporte

router.post('/addSportFavorite/:idSponsor', async(req, res) => {
    const idSponsor = req.params.idSponsor;
    const result = await addSportFavorite(idSponsor, req.body);
    res.json(result);
})



// añadir múltiples deportes

    // utilizar función addSportFavorite dentro de un bucle




// editar perfil 

router.put('/profile/:idSponsor', upload.single('logo'), async (req, res) => {
    if(req.file !== undefined) {
        const extension = '.' + req.file.mimetype.split('/')[1];
        const newName = req.file.filename + extension;
        const path = req.file.path + extension;
        fs.renameSync(req.file.path, path);
        req.body.logo = 'images/' + newName;
    }
    // if(req.body.address === null) {
    //     req.body.address = "";
    // };
    // if(req.body.city === null) {
    //     req.body.city = "";
    // };
    // if(req.body.country === null) {
    //     req.body.country = "";
    // };
    // if(req.body.postalcode === null) {
    //     req.body.postalcode = "";
    // };
    // if(req.body.aboutme === null) {
    //     req.body.aboutme = "";
    // };
    try {
        const idSponsor = req.params.idSponsor;
        const sponsorChanged = await editSponsor(idSponsor, req.body);
        // const userChanged = await editUser(idSponsor, req.body);
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





// // quitar favorito 

// router.put('/removeAthleteFavorite/:idAthlete', async(req, res) => {
//     try {
//         const idAthlete = req.params.idAthlete;
//         const result = await revertFavorite(idAthlete, req.body);
//         res.json(result);
//     } catch (err) {
//         res.json({error: err.message});
//     }
// });



module.exports = router;