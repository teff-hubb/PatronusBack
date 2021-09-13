

            
// register 

const register = ({ email, password, fk_athlete, fk_sponsor }) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('insert into users (email, password, fk_athlete, fk_sponsor) values (?, ?, ?, ?)',
        [email, password, fk_athlete, fk_sponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
    // Debo diferenciar según sea el registro para athletes que para sponsors para insertar también los datos en las tablas correspondientes de cada uno. 
};



// recuperar el usuario por email para saber si se ha insertado bien

const getByEmail = (email) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('select * from users where email = ?',
        [email],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
};



// const getById = (userId) => {
//     const prom = new Promise ((resolve, reject) => {

//     })
// }



module.exports = {
    register, getByEmail
}