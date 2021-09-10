const router = require('./sponsors');


router.get('/:idDeportista', (req, res) => {
    res.end('Ruta GET idDepostistas funcionando')
});


router.get('/:invertidos', (req, res) => {
    res.end('Ruta GET idDepostistas funcionando')
});



module.exports = router;