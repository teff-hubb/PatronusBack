const { createToken } = require('../../helpers');
const { getByEmail, register } = require('../../models/user.model');
const bcrypt = require('bcryptjs');

const router = require('express').Router();


// register

router.post('/register', async (req, res) => {
    try {
        const user = await getByEmail(req.body.email);
        console.log(user)
        if (user[0]) {
            return res.json({ error: 'Error en el registro. Por favor, revise los datos' });
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const result = await register(req.body);
        res.json('El usuario se ha registrado correctamente');
    } catch (err) {
        res.json({ error: err.message });
    }
})



// login

router.post('/login', async (req, res) => {
    const user = await getByEmail(req.body.email);
    if (!user[0]) {
        return res.json({ error: 'Error en usuario y/o contraseña 1' });
    }
    const equal = bcrypt.compareSync(req.body.password, user[0].password);
    if (equal) {
        console.log(user);
        res.json({ success: 'Login correcto',
                token: createToken(user[0])
                 });
    } else {
        res.json ({error: 'Error en usuario y/o contraseña 2'})
    }
});



module.exports = router;