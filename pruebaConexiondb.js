const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'user1994',
    database: 'patronus',
    port: 3306
});

connection.connect((err) => {
    connection.query('select * from athletes', (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(result);
    });
    connection.end();
});