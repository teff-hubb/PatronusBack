// Simples manejadores de rutas que nosotros intercalamos entre el código que tenemos creado 

// Los middleware SIEMPRE van a tener la misma forma --> req, res y next

const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');


const checkToken = (req, res, next) => {
    // 1 - Comprobamos si existe el token dentro de la cabecera de mi petición;
        // El req.headers me devuelve todos los valores de la cabecera que tenga asociada mi petición.     
    const token = req.headers['authorization'];
    if (!token) {
        return res.json({ error: 'Debes incluir la cabecera de autenticación' });
    }

    // 2 - Desencriptamos el token (puede que este sí que tenga valores pero que esté mal);
    let payload;
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log(payload); 
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // 3 - Comprobar si el token está caducado;
    if(payload.expired_at < dayjs().unix()) {
        return res.json({ error: 'El token está caducado' });
    }

    // 4 - Recuperar el usuario logueado;
        // payload.user_id: Esto le va a decir a la aplicación quién es el usuario que le está lanzando la petición y actuar en consecuencia. 



    next();
}


    // PREGUNTA: Diferenciar aquí si es fk_athlete o fk_sponsor
        // Solo por pasar por el middleware ---> Le puedo añadir una propiedad al req : req.user y ese req.user empieza a formar parte del req y viaja con él, de forma que en los siguientes manejadores estará disponible esta información (de esta forma sabré qué user está logado).

    // Ejemplo: 

        // const checkRol = (req, res, next) => {}




module.exports = { checkToken };




// NOTA: 

    /*      

        TODOS los middlewares SIEMPRE tienen la misma estructura: 
            const x = (req, res, next) => {}
 
    */