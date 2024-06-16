const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Crea una conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
  });

  // Conéctate a la base de datos
db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
  });

  app.post('/ruta-al-servidor', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;

    const query = 'INSERT INTO datos (nombre, email) VALUES (?, ?)';
    db.query(query, [nombre, email], (err, result) => {
        if (err) throw err;
        res.json({nombre: nombre, email: email});
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});



