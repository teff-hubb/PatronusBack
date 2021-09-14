const { createToken } = require('../../helpers');
const { getByEmail, register, changeStatus } = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const router = require('express').Router();


// register

router.post('/register', 
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
            if (user[0]) {
                return res.json({ error: 'Error en el registro. Por favor, revise los datos' });
            }
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const result = await register(req.body);
            res.json('El usuario se ha registrado correctamente');
        } catch (err) {
            res.json({error: err.message})
        }
});



// login

router.post('/login', async (req, res) => {
    const user = await getByEmail(req.body.email);
    if (!user[0]) {
        return res.json({ error: 'Error en usuario y/o contraseña 1' });
    }
    console.log(user[0]);
    const equal = bcrypt.compareSync(req.body.password, user[0].password);
    if (equal) {
        res.json({ success: 'Login correcto',
                token: createToken(user[0])
                 });
    } else {
        res.json ({error: 'Error en usuario y/o contraseña 2'})
    }
});


// cambiar status oferta

router.put('/offers', async (req, res) => {
    const result = await changeStatus(req.body);
    res.json(result);
})




module.exports = router;