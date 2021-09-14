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
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = 1 AND  ats.status = 0',
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
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = 1 AND  ats.status = 2',
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
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = 1 AND  ats.status = 1',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}

  



// editProfile

const editProfile = (idAthelete, { name, surname, age, photo, sport, country, quatitydemand, percentage, limitdate, graphic, followers }) => {
    const prom = new Promise ((resolve, reject) => {
        db.query(('UPDATE patronus.athletes SET name = ?, surname = ?, age = ?, photo = ?, sport = ?, country = ?, quantitydemand = ?, percentage = ?, limitdate = ?, graphic = ?, followers = ? WHERE id = ?'),
        [name, surname, age, photo, sport, country, quantitydemand, percentage, limitdate, graphic, followers, idAthelete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}




// rejectOffer ---> PUT

    // No delete, sino cambiar status. 

    // ¿Misma función para athlete que para sponsor y ambos cambian el status de la oferta en la base de datos?
    // ¿Como parámetro es el id del usuario y de ahí se saca el fk_athlete o el fk_sponsor para saber el status de qué deportista se modifica? 

const changeStatus = () => {
    const prom = new Promise ((resolve, reject) => {
        db.query('',
        [idAthlete],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}





// getById 

// const getById = (athleteId) => {
//     return new Promise ((resolve, reject) => {
//         db.query('select * from athletes where id = ?',
//         [athleteId],
//         (err, result) => {
//             if (err) reject(err);
//             if (result.length !== 1) return resolve(null);
//             resolve(result[0]);
//         });
//     });
// };



module.exports = {
    getAll, getAllOffers, getOffersWaiting, getOffersRejecteds, getMySponsors, editProfile, getCountry, getSport, 
}
