const { createAthlete } = require("./athlete.model");
const { createSponsor } = require("./sponsor.model");



// register 

const register = ({ email, password, fk_athlete, fk_sponsor, name, surname, age, company, logo }) => {
    const prom = new Promise ((resolve, reject) => {
        if (fk_sponsor === null) {
            createAthlete( name, surname, age );
        }
        if (fk_athlete === null) {
            createSponsor(company, logo);
        }
        db.query('insert into users (email, password, fk_athlete, fk_sponsor) values (?, ?, ?, ?)',
        [email, password, fk_athlete, fk_sponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
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


// rejectOffer ---> PUT

    // No delete, sino cambiar status. 

    // ¿Misma función para athlete que para sponsor y ambos cambian el status de la oferta en la base de datos?
    // ¿Como parámetro es el id del usuario y de ahí se saca el fk_athlete o el fk_sponsor para saber el status de qué deportista se modifica? 

const changeStatus = ({fk_athletes, fk_sponsors, participations, status, id}) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('UPDATE patronus.athletes_sponsors SET fk_athletes = ?, fk_sponsors = ?, participations = ?, status = ? WHERE id = ?',
        [fk_athletes, fk_sponsors, participations, status, id],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}












// const getById = (userId) => {
//     const prom = new Promise ((resolve, reject) => {

//     })
// }



module.exports = {
    register, getByEmail, changeStatus
}