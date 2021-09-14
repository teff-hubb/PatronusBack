

// mis deportistas 

const getMyAthletes = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 0', 
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}



// mis ofertas (esperando)

const getMyAllOffers = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 0',
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
    return prom;
}




// mis ofertas (rechazadas)

const getMyOffersRejecteds = (idSponsor) => {
    const prom = new Promise((resolve, reject) => {
        db.query('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 0',
        [idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
    return prom;
}




// editar perfil 

const editProfile = (idSponsor) => {
    const prom = new Promise ((resolve, reject) => {
        db.query('UPDATE patronus.sponsors SET company = ?, logo = ? WHERE id = ?', 
        [company, logo, idSponsor],
        (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
    return prom;
}













// rejectOffer 
    // ¿igual que en athlete?








module.exports = {
    getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile

}