const server = require('./config/server');
const dbConnection = require('./config/connection');

// requerir rutas

server.listen(server.get('port'), () => {
    console.log('Servidor escuchando en puerto ', server.get('port'));
});

server.get('/', (req, res) => {
    res.send("Hola desde el Servidor.");
});

server.get('/api', (req, res) => {
    const connection = dbConnection();

    connection.query('SELECT * FROM producto', (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
    })
})