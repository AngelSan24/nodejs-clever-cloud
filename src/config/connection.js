const mysql = require("mysql");

module.exports = () => {
    return mysql.createConnection({
        host: 'byoqitgxwidg9ulnoywg-mysql.services.clever-cloud.com',
        user: 'usm9oaspwebg88ty',
        password: 'usm9oaspwebg88ty',
        database: 'byoqitgxwidg9ulnoywg',
        port: '3306',
    })
};