const { createToken } = require('../../helpers');
const { getByEmail, changeStatus, createAthlete, registerUser, createSponsor } = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const router = require('express').Router();


// register

router.post('/register/athlete', 
    body('name', 'El campo name debe tener una longitud igual o superior a 3 caracteres').exists().isLength({ min: 3 }), 
    body('password', 'Dabes incluir un password mayor de 3 caracteres y que contenga, al menos: una mayúscula, una minúscula, un número y un símbolo especial').exists().isLength({ min: 4 }).custom(value => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");
        return regex.test(value);
    }),
    body('email', 'Debes incluir un email correcto').exists().isEmail(), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }
            const user = await getByEmail(req.body.email);
            if (user) {
                return res.json({ error: 'Error en el registro. Por favor, revise los datos' });
            }
            const athlete = await createAthlete(req.body);
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const result = await registerUser(req.body, athlete.insertId);
            res.json(result);
        } catch (err) {
            res.json({error: err.message})
        }
});



router.post('/register/sponsor', 
    body('password', 'Dabes incluir un password mayor de 3 caracteres y que contenga, al menos: una mayúscula, una minúscula, un número y un símbolo especial').exists().isLength({ min: 4 }).custom(value => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");
        return regex.test(value);
    }),
    body('email', 'Debes incluir un email correcto').exists().isEmail(), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }
            const user = await getByEmail(req.body.email);
            if (user) {
                return res.json({ error: 'Error en el registro. Por favor, revise los datos' });
            }
            const sponsor = await createSponsor(req.body);
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const result = await registerUser(req.body, sponsor.insertId);
            res.json(result);
        } catch (err) {
            res.json({ error: err.message })
        }
});



// login

router.post('/login', async (req, res) => {
    const user = await getByEmail(req.body.email);
    console.log(user);
    if (!user) {
        return res.json({ error: 'Error en usuario y/o contraseña - (es el email)' });
    }
    const equal = bcrypt.compareSync(req.body.password, user.password);
    if (equal) {
        res.json({ success: 'Login correcto',
                token: createToken(user)
                 });
    } else {
        res.json ({error: 'Error en usuario y/o contraseña - (es la contraseña)'})
    }
});


// cambiar status oferta

router.put('/offers', async (req, res) => {
    const result = await changeStatus(req.body);
    res.json(result);
})




module.exports = router;