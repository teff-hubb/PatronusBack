const { executeUniqueQuery, executeQuery } = require("../helpers");


const getById = (idSponsor) => {
        return executeUniqueQuery('SELECT * FROM patronus.sponsors WHERE id = ?', 
        [idSponsor]
    );
}


// mis deportistas = ofertas aceptadas

const getMyAthletes = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 1', 
        [idSponsor]
    );
}



// ofertas enviadas esperando a que respondan los atletas

const getMyAllOffers = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes a, patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND a.id = ats.id AND ats.fk_sponsors = ?', 
        [idSponsor]
    );
}




// ofertas rechazadas

const getMyOffersRejecteds = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 2',
        [idSponsor]
    );
}



// create sponsor

const createSponsor = (company, logo) => {
        return executeQuery('INSERT INTO sponsors (company, logo) VALUES (?, ?)', 
        [company,logo]
    );
}



// editar perfil 

const editProfile = (idSponsor, {company, logo}) => {
        return executeQuery('UPDATE patronus.sponsors SET company = ?, logo = ? WHERE id = ?',
        [company, logo, idSponsor],
    );
}







module.exports = {
    getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editProfile, createSponsor, getById

}