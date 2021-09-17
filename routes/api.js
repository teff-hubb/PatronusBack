const router = require('express').Router();

const { checkToken, checkRol } = require('../middleware');

const apiDeportistasRouter = require('./api/athletes');
const apiSponsorsRouter = require('./api/sponsors');
const apiUsersRouter = require('./api/users')

router.use('/athletes', checkToken, checkRol('A'), apiDeportistasRouter);
router.use('/sponsors', checkToken, checkRol('S'), apiSponsorsRouter);
router.use('/users', apiUsersRouter);


module.exports = router;