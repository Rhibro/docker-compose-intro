const app = require('./app');
const port = 3000;

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`API is running on http://localhost:${port}`);
});

module.exports = server; // export server so tests can close it

