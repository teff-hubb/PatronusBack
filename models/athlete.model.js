// const dayjs = require('dayjs');


// Métodos para lanzar las queries 


// getAll

const getAll = () => {
    const prom = new Promise ((resolve, reject) => {
        db.query('select * from athletes', (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom; 
}


// getById 

const getById = (athleteId) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('select * from athletes where id = ?',
        [athleteId],
        (err, result) => {
            if (err) reject(err);
            if (result.length !== 1) return resolve(null);
            resolve(result[0]);
        });
    });
    return prom;
};



// getAllOffers

const getAllOffers = (idAthlete) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ?',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// getOffersWaiting

const getOffersWaiting = (idAthlete) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 0',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// getOffersRejecteds 

const getOffersRejecteds = (idAthlete) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 2',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// getMySponsors 

const getMySponsors = (idAthlete) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = ? AND ats.status = 1',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}




// ------------------------- ORDENAR --------------------------------- //




// ------------------------- FILTROS --------------------------------- //


// Filtrar por invertible (fecha límite no ha expirado)

    // hoy = dayjs().unix();


// ------------------------------------------------------------------- //




// ordenar atletas por %invertido 


const orderByPercentage = () => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers FROM patronus.athletes ORDER BY percentage DESC', (err, result) => {
            if(err) reject(err);
            if(result) resolve(result);
        })
    })
    return prom;
}



// ordenar atletas por fecha de expiración de la inversión





// ------------------------------------------------------------------- //

  

// create athlete table athlete
const createAthlete = ( name, surname, age ) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('insert into patronus.athletes (name, surname, age) values (?, ?, ?)',
        [name, surname, age],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// editProfile

const editProfile = (idAthlete, { name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers }) => {
    const prom = new Promise ((resolve, reject) => {
        db.query(('UPDATE patronus.athletes SET name = ?, surname = ?, age = ?, photo = ?, sport = ?, country = ?, quantitydemand = ?, percentage = ?, limitdate = ?, graphic = ?, followers = ? WHERE id = ?'),
        [name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers, idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}







module.exports = {
    getAll, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors, editProfile, createAthlete, getById, orderByPercentage
}
