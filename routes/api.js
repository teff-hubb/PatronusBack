const router = require('express').Router();


const apiDeportistasRouter = require('./api/athletes');
const apiSponsorsRouter = require('./api/sponsors');


router.use('/athletes', apiDeportistasRouter);
router.use('/sponsors', apiSponsorsRouter);


module.exports = router;