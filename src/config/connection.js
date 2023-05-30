const mysql = require("mysql");

module.exports = () => {
    return mysql.createPool({
        host: 'byoqitgxwidg9ulnoywg-mysql.services.clever-cloud.com',
        user: 'usm9oaspwebg88ty',
        password: 'oRyowLtxxxq0QHY5CfJC',
        database: 'byoqitgxwidg9ulnoywg',
        port: '3306',
        connectionLimit: 5
    })
};