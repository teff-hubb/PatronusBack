const { executeUniqueQuery, executeQuery } = require("../helpers");


const getById = (idSponsor) => {
        return executeUniqueQuery('SELECT * FROM patronus.sponsors WHERE id = ?', 
        [idSponsor]
    );
}


// todos los atletas

const getAll = () => {
        return executeQuery('SELECT * FROM athletes', 
        []
    );
}


// atleta por Id

const getAthleteById = (athleteId) => {
        return executeUniqueQuery('SELECT * FROM athletes where id = ?', 
        [athleteId]
    );
};



// mis deportistas = ofertas aceptadas

const getMyAthletes = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, at.name, at.surname, at.age, at.country, at.sport, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s, patronus.athletes at WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = at.id AND ats.fk_sponsors = ? AND ats.status = 1', 
        [idSponsor]
    );
}



// ofertas enviadas esperando a que respondan los atletas

const getMyAllOffers = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, at.name, at.surname, at.age, at.country, at.sport, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s, patronus.athletes at WHERE ats.fk_sponsors = s.id AND ats.fk_athletes = at.id AND ats.fk_sponsors = ?', 
        [idSponsor]
    );
}






// ofertas rechazadas

const getMyOffersRejecteds = (idSponsor) => {
        return executeQuery('SELECT ats.participations, ats.status, s.company, s.logo, ats.fk_athletes FROM patronus.athletes_sponsors ats, patronus.sponsors s WHERE ats.fk_sponsors = s.id AND ats.fk_sponsors = ? AND ats.status = 2',
        [idSponsor]
    );
}





// editar perfil 

const editSponsor = (idSponsor, {company, logo}) => {
        return executeQuery('UPDATE patronus.sponsors SET company = ?, logo = ? WHERE id = ?',
        [company, logo, idSponsor],
    );
}

const editUser = (idSponsor, {email}) => {
        return executeQuery('UPDATE patronus.users SET email = ? WHERE fk_sponsor = ?',
        [email, idSponsor]
    );
}


// nueva oferta

const newOffer = (fk_sponsors, {fk_athletes, participations}) => {
        return executeQuery('INSERT INTO patronus.athletes_sponsors (fk_athletes, fk_sponsors, participations, status) VALUES (?, ?, ?, ?)',
        [fk_athletes, fk_sponsors, participations, 0]
    );
}



// recuperar una única oferta por id

const offerById = (id) => {
        return executeUniqueQuery('SELECT * FROM patronus.athletes_sponsors WHERE id = ?', 
        [id]
    );
}



// darse de baja
const deleteAccount = (idSponsor) => {
    return executeQuery('UPDATE patronus.sponsors SET status = 0 WHERE id = ?', [idSponsor]);
}


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


// Recuperar athletes por country

const getAthletesByCountry = (nameCountry) => {
        return executeQuery('SELECT * FROM patronus.athletes WHERE country = ?',
        [nameCountry]
    )
};

// Recuperar athletes por sport

const getAthletesBySport = (nameSport) => {
        return executeQuery('SELECT * FROM patronus.athletes WHERE SPORT = ?',
        [nameSport]
    )
};

// recuperar athletes invertibles

const getInvertible = () => {
        return executeQuery('SELECT * FROM patronus.athletes WHERE limitdate > now()', 
        []
    )
};


// recuperar athletes no invertibles

const getNoInvertibles = () => {
        return executeQuery('SELECT * FROM patronus.athletes WHERE limitdate < now()', 
        []
    )
};


// recuperar los países a los que pertecenen los athletes

const getCountries = () => {
        return executeQuery('SELECT DISTINCT country FROM patronus.athletes', 
        []
    );
}


const getSports = () => {
        return executeQuery('SELECT DISTINCT sport FROM patronus.athletes',
        []
    );
}



// añadir favorito 

const addFavorite = (fk_athletes,  {fk_sponsors}) => {
        return executeQuery('INSERT INTO patronus.favorites (fk_athletes, fk_sponsors, favorite) VALUES (?, ?, 1)',
        [fk_athletes, fk_sponsors]
    );
}


// quitar favorito 

const revertFavorite = (fk_athletes, { fk_sponsors }) => {
        return executeQuery('UPDATE patronus.favorites SET favorite = 0 WHERE fk_athletes = ? AND fk_sponsors = ?',
        [fk_athletes, fk_sponsors]
    )
}


// recuperar mis favoritos

const myFavorites = ({ fk_sponsors }) => {
        return executeQuery('SELECT patronus.favorites WHERE fk_sponsors = ?',
        [fk_sponsors]
    )
}



module.exports = {
    getMyAthletes, getMyAllOffers, getMyOffersRejecteds, editSponsor, getById, offerById, deleteAccount, editUser, getAll, getAthleteById, orderByPercentage, orderByLimitdate, newOffer, getAthletesByCountry, getAthletesBySport, getInvertible, getCountries, getSports, getNoInvertibles, addFavorite, revertFavorite, myFavorites

}