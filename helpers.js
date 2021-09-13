const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');


function createToken(user) {
    const payload = {
        user_id: user.fk_athlete || user.fk_sponsor,
        expired_at: dayjs().add(5, 'minutes').unix(),
        created_at: dayjs().unix()
    };
    return jwt.sign(payload, 'MUSIKISHA');
}


module.exports = {
    createToken
}