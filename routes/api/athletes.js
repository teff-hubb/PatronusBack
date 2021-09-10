const router = require('express').Router();

// GET localhost:3000/api/athletes
router.get('/', (req, res) => {
    res.end('ruta get deportista funcionando')
});

// GET localhost:3000/api/athletes/offers
router.get('/offers', (req, res) => {
    res.end('ruta get ofertas funcionando')
});

// GET localhost:3000/api/athletes/porfolio
router.get('/portfolio', (req, res) => {
    res.end('ruta get portfolio funcionando')
});

// POST localhost:3000/api/deportistas/register
router.post('/register', (req, res) => {
    res.end('ruta post register funcionando')
});

// POST localhost:3000/api/deportistas/login
router.post('/login', (req, res) => {
    res.end('ruta post login funcionando')
});

// PUT localhost:3000/api/deportistas
router.put('/', (req, res) => {
    res.end('ruta put atletes funcionando')
});

// DELETE localhost:3000/api/deportistas/ofertas
router.delete('/offers', (req, res) => {
    res.end('ruta delete funcionando')
});







module.exports = router;