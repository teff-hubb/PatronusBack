const router = require('express').Router();


// GET localhost:3000/api/sponsors/ofertas
router.get('/offers', (req, res) => {
    res.end('ruta get offers funcionando')
});

// POST localhost:3000/api/sponsors/register
router.post('/register', (req, res) => {
    res.end('ruta post register funcionando')
});

// POST localhost:3000/api/sponsors/login
router.post('/login', (req, res) => {
    res.end('ruta post login funcionando')
});
// deportistas invertidos

router.get('/myathletes', (req, res) => {
    res.end('Ruta myathletes funcionaa')
});


// PUT localhost:3000/api/sponsors
router.put('/', (req, res) => {
    res.end('ruta put  funcionando')
});

// DELETE localhost:3000/api/sponsors/ofertas
router.delete('/offers', (req, res) => {
    res.end('ruta delete funcionando')
});






module.exports = router;