

// Métodos para lanzar las queries 

const { executeQuery, executeUniqueQuery } = require("../helpers");


// getAll

const getAll = () => {
        return executeQuery('SELECT * FROM athletes', 
        []
    );
}
// Recuperar athletes por country

const getCountry = (nameCountry) => {
    const prom = new Promise((resolve, reject) => {
        db.query('select * from athletes where country = ?',
            [nameCountry],
            (err, result) => {
                if (err)  reject(err);
                if (result) resolve(result);
            });
    })
    return prom;
    
}

// Recuperar athletes por sport

const getSport = (nameSport) => {
    const prom = new Promise((resolve, reject) => {
        db.query('select * from athletes where sport = ?',
            [nameSport],
            (err, result) => {
                if (err) reject(err);
                if (result) resolve(result);
            });
    })
    return prom;
}

// recuperar athletes  invertibles

const getInvertible = () => {
    const prom = new Promise((resolve, reject) => {
        db.query('select * from athletes where limitdate > now()',
            (err, result) => {
                if (err) reject(err);
                if (result) resolve(result);
        })
    })
    return prom;
}

// getById 

const getById = (athleteId) => {
         return executeUniqueQuery('SELECT * FROM athletes where id = ?', 
         [athleteId]
    );
};



// getAllOffers

const getAllOffers = (idAthlete) => {
    return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ?', 
    [idAthlete]);
}



// getOffersWaiting

const getOffersWaiting = (idAthlete) => {
    return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 0', 
    [idAthlete]);
}



// getOffersRejecteds 

const getOffersRejecteds = (idAthlete) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 2', [idAthlete]
    );
}



// getMySponsors 

const getMySponsors = (idAthlete) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 1', [idAthlete]
    );
}




// ------------------------- ORDENAR --------------------------------- //





// ordenar atletas por %invertido 


const orderByPercentage = () => {
        return executeQuery('SELECT name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers FROM patronus.athletes ORDER BY percentage DESC', []
    );
}



// ordenar atletas por fecha de expiración de la inversión


const orderByLimitdate = () => {
        return executeQuery('SELECT * FROM patronus.athletes WHERE limitdate > now() ORDER by limitdate ASC', []
    );
}



// ------------------------------------------------------------------- //

  





// editProfile

const editDatesAthlete = (idAthlete, { name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers }) => {
        return executeQuery('UPDATE patronus.athletes SET name = ?, surname = ?, age = ?, photo = ?, sport = ?, country = ?, quantitydemand = ?, percentage = ?, limitdate = ?, graphic = ?, followers = ? WHERE id = ?', [name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers, idAthlete]
    );

}


const editDatesUser = (idAthlete, email) => {
    return executeQuery('UPDATE patronus.users SET email = ? WHERE fk_athlete = ?',
    [email, idAthlete]
);
}






// sumar participaciones 

const sumParticipations = (fk_athlete, participations) => {
    return executeQuery('', [fk_athlete, participations]);
}





// restar participaciones

// En principio dejarlo SIN utilidad

const restParticipations = (fk_athlete, participations) => {
    return executeQuery('', [fk_athlete, participations]);
}





// darse de baja

const deleteAccount = (idAthlete) => {
    return executeQuery('UPDATE patronus.athletes SET status = 0 WHERE id = ?', 
    [idAthlete]);
}






module.exports = {
    getAll, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors, editDatesAthlete, getById, orderByPercentage, orderByLimitdate, sumParticipations, restParticipations, deleteAccount, editDatesUser
}
