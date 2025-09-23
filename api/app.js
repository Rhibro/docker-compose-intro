// app.js
const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;

const app = express();
// Use DATABASE_URL if provided, otherwise fall back to individual vars
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || 'db',
  database: process.env.POSTGRES_DB || 'my_database',
  password: process.env.POSTGRES_PASSWORD || 'my-secret-pw',
  port: process.env.DB_PORT || 5432,
});

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const { message } = req.body;
    await pool.query(
      'CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, text TEXT)'
    );
    const result = await pool.query(
      'INSERT INTO messages (text) VALUES ($1) RETURNING id',
      [message]
    );
    res.json({ id: result.rows[0].id, status: 'success' });
  } catch (error) {
    console.error('Failed to save data:', error);
    res.status(500).json({ status: 'error', message: 'Failed to save data' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running on port ${PORT}`);
});

module.exports = app;
