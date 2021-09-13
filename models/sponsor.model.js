

const getById = (idSponsor) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('select * from patronus.sponsors where id = ?',
        [idSponsor],
        (err, result) => {
            if(err) reject(err);
            if(result) resolve(result);
        });
    });
    return prom;
}

// mis deportistas = ofertas aceptadas

const getMyAthletes = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 1', 
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// ofertas enviadas esperando a que respondan los atletas

const getMyAllOffers = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes a, patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND a.id = ats.id AND ats.fk_sponsors = ?',
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
    return prom;
}




// ofertas rechazadas

const getMyOffersRejecteds = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 2',
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
    return prom;
}




// create sponsor

const createSponsor = (company, logo) => {
    const prom = new Promise((resolve, reject) => {
        db.query('INSERT INTO sponsors (company, logo) VALUES (?, ?)',
        [company,logo],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    });
    return prom;
}



// editar perfil 

const editProfile = (idSponsor, {company, logo}) => {
    const prom = new Promise((resolve, reject) => {
        db.query('UPDATE patronus.sponsors SET company = ?, logo = ? WHERE id = ?', 
        [company, logo, idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}







module.exports = {
    getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile, createSponsor, getById

}