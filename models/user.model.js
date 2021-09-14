const { executeQuery } = require("../helpers");
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
        db.query('INSERT INTO USERS (email, password, fk_athlete, fk_sponsor) VALUES (?, ?, ?, ?)',
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
        return executeQuery('SELECT * FROM users WHERE email = ?', 
        [email]
    );
};




// rejectOffer ---> PUT

    // No delete, sino cambiar status. 

    // ¿Misma función para athlete que para sponsor y ambos cambian el status de la oferta en la base de datos?
    // ¿Como parámetro es el id del usuario y de ahí se saca el fk_athlete o el fk_sponsor para saber el status de qué deportista se modifica? 

const changeStatus = ({fk_athletes, fk_sponsors, participations, status, id}) => {
        executeQuery('UPDATE patronus.athletes_sponsors SET fk_athletes = ?, fk_sponsors = ?, participations = ?, status = ? WHERE id = ?',
        [fk_athletes, fk_sponsors, participations, status, id]
    );
}





module.exports = {
    register, getByEmail, changeStatus
}