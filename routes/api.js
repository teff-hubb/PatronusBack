const router = require('express').Router();

const { checkToken } = require('../middleware');

const apiDeportistasRouter = require('./api/athletes');
const apiSponsorsRouter = require('./api/sponsors');
const apiUsersRouter = require('./api/users')

router.use('/athletes', checkToken, apiDeportistasRouter);
router.use('/sponsors', checkToken, apiSponsorsRouter);
router.use('/users', apiUsersRouter);


module.exports = router;