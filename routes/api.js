const router = require('express').Router();


const apiDeportistasRouter = require('./api/deportistas');
const apiSponsorsRouter = require('./api/sponsors');


router.use('/deportistas', apiDeportistasRouter);
router.use('/sponsors', apiSponsorsRouter);


module.exports = router;