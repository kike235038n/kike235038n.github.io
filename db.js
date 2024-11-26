const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de PostgreSQL
const pool = new Pool({
    user: 'postgres',         // Cambia por tu usuario de PostgreSQL
    host: 'localhost',          // Cambia si tu base de datos no está en localhost
    database: 'postgres', // Cambia por el nombre de tu base de datos
    password: 'Dani1216',  // Contraseña de PostgreSQL
    port: 5434,                 // Puerto por defecto
});

// Ruta para obtener las preguntas
app.get('/api/preguntas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM preguntas');
        res.json(result.rows);
    } catch (err) {
        console.error('Error al obtener preguntas:', err);
        res.status(500).send('Error en el servidor');
    }
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
