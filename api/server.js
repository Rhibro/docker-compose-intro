const app = require('./app');
const PORT = process.env.PORT || 3000;
const pool = require('./db');

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`API is running on http://localhost:${PORT}`);
});

module.exports = server; // export server so tests can close it

