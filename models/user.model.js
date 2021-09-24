const { executeQuery, executeUniqueQuery } = require("../helpers");



// create athlete table athlete
const createAthlete = ({ nombre, apellidos, edad }) => {
        return executeQuery('INSERT INTO patronus.athletes (name, surname, age, status, quantitydemand, percentage) VALUES (?, ?, ?, ?, ?, ?)', [nombre, apellidos, edad, 1, 1000, 100]
    );
}



// create sponsor table sponsor

const createSponsor = ({ empresa }) => {
        return executeQuery('INSERT INTO sponsors (company, status) VALUES (?, ?)', 
        [empresa, 1]
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
};

const getByIdSponsor = (idSponsor) => {
    return executeUniqueQuery('SELECT * FROM users WHERE fk_sponsor = ?',
    [idSponsor])
};




// rejectOffer ---> PUT

    // No delete, sino cambiar status. 

    // ¿Misma función para athlete que para sponsor y ambos cambian el status de la oferta en la base de datos?
    // ¿Como parámetro es el id del usuario y de ahí se saca el fk_athlete o el fk_sponsor para saber el status de qué deportista se modifica? 



    // Como administrador, Patronus puede rechazar la oferta. Entonces --- changeStatus + resta. 

const changeStatus = ({fk_athletes, fk_sponsors, participations, status, id}) => {
        return executeQuery('UPDATE patronus.athletes_sponsors SET fk_athletes = ?, fk_sponsors = ?, participations = ?, status = ? WHERE id = ?',
        [fk_athletes, fk_sponsors, participations, status, id]
    );
}



// recuperar todas las noticias

const getAthletesNews = () => {
        return executeQuery('SELECT * FROM patronus.athletes_news',
        []
    )
};



// reset password 

const resetPassword = ({password, email}) => {
    return executeQuery('UPDATE patronus.users SET password = ? WHERE email = ?',
    [password, email]
    )
};




module.exports = {
    getByEmail, changeStatus, createAthlete, createSponsor, registerUser, getByIdAthlete, getByIdSponsor, getAthletesNews, resetPassword
}