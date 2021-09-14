const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');


function executeQuery(query, arrParams = []) {
    return new Promise((resolve, reject) => {
        db.query(query, arrParams, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}


function executeUniqueQuery(query, arrParams = []) {
    return new Promise((resolve, reject) => {
        db.query(query, arrParams, (err, result) => {
            if (err) return reject(err);
            if (result.length !==1) return resolve(null);
            resolve(result[0]);
        });
    });
}



function createToken(user) {
    const payload = {
        user_id: user.id,
        expired_at: dayjs().add(60, 'minutes').unix(),
        created_at: dayjs().unix()
        // role: user.role
    };
    console.log(payload);
    return jwt.sign(payload, process.env.SECRET_KEY);
}


module.exports = {
    createToken, executeQuery, executeUniqueQuery
}