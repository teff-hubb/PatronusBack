const { executeQuery, executeUniqueQuery } = require("../helpers");



// create athlete table athlete
const createAthlete = ({ name, surname, age }) => {
        return executeQuery('INSERT INTO patronus.athletes (name, surname, age) VALUES (?, ?, ?)', [name, surname, age]
    );
}



// create sponsor table sponsor

const createSponsor = ({ company, logo }) => {
        return executeQuery('INSERT INTO sponsors (company, logo) VALUES (?, ?)', 
        [company,logo]
    );
}



// register 

const registerUser = ({ email, password }, fk_athlete, fk_sponsor, role) => {
        return executeQuery('INSERT INTO USERS (email, password, fk_athlete, fk_sponsor, role) VALUES (?, ?, ?, ?, ?)',
        [email, password, fk_athlete, fk_sponsor, role]
    );
}





// const registerAthlete = ({ email, password, fk_athlete, fk_sponsor, name, surname, age, company, logo }) => {
//     const prom = new Promise ((resolve, reject) => {
//         if (fk_sponsor === null) {
//             createAthlete( name, surname, age );
//         }
//         if (fk_athlete === null) {
//             createSponsor(company, logo);
//         }
//         db.query('INSERT INTO USERS (email, password, fk_athlete, fk_sponsor) VALUES (?, ?, ?, ?)',
//         [email, password, fk_athlete, fk_sponsor],
//         (err, result) => {
//             if (err) reject(err);
//             if (result) resolve(result);
//         });
//     });
//     return prom;
// };



// recuperar el usuario por email para saber si se ha insertado bien

const getByEmail = (email) => {
        return executeUniqueQuery('SELECT * FROM users WHERE email = ?', 
        [email]
    );
};

const getByIdAthlete = (idAthlete) => {
    return executeUniqueQuery('SELECT * FROM users WHERE fk_athlete = ?',
    [idAthlete])
}

const getByIdSponsor = (idSponsor) => {
    return executeUniqueQuery('SELECT * FROM users WHERE fk_sponsor = ?',
    [idSponsor])
}




// rejectOffer ---> PUT

    // No delete, sino cambiar status. 

    // ¿Misma función para athlete que para sponsor y ambos cambian el status de la oferta en la base de datos?
    // ¿Como parámetro es el id del usuario y de ahí se saca el fk_athlete o el fk_sponsor para saber el status de qué deportista se modifica? 



    // Como administrador, Patronus puede rechazar la oferta. Entonces --- changeStatus + resta. 

const changeStatus = ({fk_athletes, fk_sponsors, participations, status, id}) => {
        executeQuery('UPDATE patronus.athletes_sponsors SET fk_athletes = ?, fk_sponsors = ?, participations = ?, status = ? WHERE id = ?',
        [fk_athletes, fk_sponsors, participations, status, id]
    );
}





module.exports = {
    getByEmail, changeStatus, createAthlete, createSponsor, registerUser, getByIdAthlete, getByIdSponsor 
}