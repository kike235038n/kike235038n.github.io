const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la base de datos
const pool = new Pool({
    user: 'postgres',         
    host: 'localhost',          
    database: 'postgres', 
    password: 'Dani1216',  
    port: 5434,                 
});

// Ruta para registrar los resultados
app.post('/api/registrar', async (req, res) => {
    const { nombre, apellidos, grupo, aciertos } = req.body;

    try {
        await pool.query(
            'INSERT INTO registros (nombre, apellidos, grupo, aciertos) VALUES ($1, $2, $3, $4)',
            [nombre, apellidos, grupo, aciertos]
        );
        res.status(200).send('Registro exitoso');
    } catch (err) {
        console.error('Error al registrar datos:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
