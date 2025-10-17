const express = require('express');
const { Pool } = require('pg');
// const PORT = process.env.PORT || 3000;

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost', //'db',
  database: process.env.POSTGRES_DB || 'my_database',
  password: process.env.POSTGRES_PASSWORD || 'my-secret-pw',
  port: process.env.DB_PORT || 5432,
});

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Gets the status of the API and returns a greeting
 *     description: Returns a welcome message to indicate that the API is running (health check)
 *     tags:
 *       - Status
 *     responses:
 *       '200':
 *         description: Successful response with welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to API root!!!
 */

app.get('/', (req, res) => {
  res.json({message: 'Welcome to API root!!!'});
});


/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns a simple API greeting
 *     description: Basic test endpoint to confirm that the API route is accessible
 *     tags:
 *       - Status
 *     responses:
 *       '200':
 *         description: Successful response with greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from the API!
 */

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

/**
 * @swagger
 * /db-test:
 *   get:
 *     summary: Tests database connectivity
 *     description: Executes a simple query (SELECT NOW()) to verify the database connection and returns the current timestamp.
 *     tags:
 *       - Database
 *     responses:
 *       '200':
 *         description: Successful response with current database time
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: string
 *                   example: "2025-10-17T12:34:56.789Z"
 *       '500':
 *         description: Database error
 */

//Database test route
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

/**
 * @swagger
 * /api/data:
 *   post:
 *     summary: Inserts a new message into the database
 *     description: Creates a `messages` table (if it doesn't exist) and inserts a new message record into it.
 *     tags:
 *       - Data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello database!"
 *     responses:
 *       '200':
 *         description: Data successfully inserted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 status:
 *                   type: string
 *                   example: success
 *       '500':
 *         description: Failed to save data
 */

//Data inserstion route
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


module.exports = { app, pool };
