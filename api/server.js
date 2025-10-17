const { app, pool } = require('./app');
const PORT = process.env.PORT || 3000;
// const pool = require('./db');
const HOST = '0.0.0.0';

let server;

if (require.main === module) {
  server = app.listen(PORT, HOST, () => {
    console.log(`API is running on http://${HOST}:${PORT}`);
  });
  // module.exports = server; // export server so tests can close it
}

module.exports = {app, pool, server}; // export server so tests can close it
