const router = require('express').Router();


const { getById, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors, deleteAccount, editDatesAthlete, editDatesUser, acceptOffer, rejectOffer, createNew, getAthleteExists } = require('../../models/athlete.model');
const { route } = require('./sponsors');



const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });

const nodemailer = require("nodemailer");



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


router.get('/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await getById(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
});


router.post('/createNew/:idAthlete', upload.single('photo'), async(req, res) => {
    if(req.file !== undefined) {
        const extension = '.' + req.file.mimetype.split('/')[1];
        const newName = req.file.filename + extension;
        const path = req.file.path + extension;
        fs.renameSync(req.file.path, path);
        req.body.photo = 'images/' + newName;
    }
    try {
        const idAthlete = req.params.idAthlete;
        const result = await createNew(idAthlete, req.body);
        res.json(result);
    } catch (err) {
        res.json({error: err.message})
    }
});




router.put('/acceptOffer/:idOffer', async (req, res) => {
    const idOffer = req.params.idOffer;
    const result = await acceptOffer(idOffer);
    res.json(result);
})

router.put('/rejectOffer/:idOffer', async (req, res) => {
    const idOffer = req.params.idOffer;
    const result = await rejectOffer(idOffer);
    res.json(result);
})




// editar perfil

router.put('/profile/:idAthlete', upload.single('photo'), async (req, res) => {
    console.log('Esto es req.file', req.file);
    console.log('Esto es req.body', req.body);
    if(req.file !== undefined) {
        const extension = '.' + req.file.mimetype.split('/')[1];
        const newName = req.file.filename + extension;
        const path = req.file.path + extension;
        fs.renameSync(req.file.path, path);
        req.body.photo = 'images/' + newName;
    }
    try {
        const idAthlete = req.params.idAthlete;
        const athleteChanged = await editDatesAthlete(idAthlete, req.body);
        // const userChanged = await editDatesUser(idAthlete, req.body.email);
        const athlete = await getById(idAthlete);
        res.json(athlete);
    } catch (err) {
        res.json({error: err.message})
    }
})


// enviar email para reset contraseña

router.post("/send-email/:idAthlete", async (req, res) => {
    const idAthlete = req.params.idAthlete;
    const user = await getAthleteExists(idAthlete, req.body);
    if (user !== []) {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "patronus.spain@gmail.com",
                pass: "Admin123!"
            }
        });
        
        let mailOptions = {
            from: "Patronus",
            to: req.body.email,
            subject: "Enviado desde nodemailer",
            text: "http://localhost:4200/reset-pass"
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                res.status(500).send(error.message);
            } else {
                console.log("Email enviado.");
                res.status(200).jsonp(req.body);
            }
        })
    };

});


router.put('/deleteAccount/:idAthlete', async (req, res) => {
    try {
        const idAthlete = req.params.idAthlete;
        const result = await deleteAccount(idAthlete);
        res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
})



module.exports = router;
