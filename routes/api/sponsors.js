const router = require('express').Router();


// GET 
router.get('/', (req, res) => {
    res.end('Ruta GET funcionando');
});



// PUT 

router.put('/', (req, res) => {
    res.end('Ruta PUT funcionando');
})



// POST 

router.post('/', (req, res) => {
    res.end('Ruta POST funcionando');
})





module.exports = router;