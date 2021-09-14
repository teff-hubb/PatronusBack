const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');


function createToken(user) {
    const payload = {
        user_id: user.id,
        expired_at: dayjs().add(60, 'minutes').unix(),
        created_at: dayjs().unix()
        // role: user.role
    };
    console.log(payload);
    return jwt.sign(payload, 'MUSIKISHA');
}


module.exports = {
    createToken
}