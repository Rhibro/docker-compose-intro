const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Automatically generated API documentation from JSDoc comments',
    },
    servers: [
        { url: '/api'},
        { url: 'http://localhost:3000/api' },
        { url: 'https://rhiswebapp-fqgbcrewb2fmeub0.swedencentral-01.azurewebsites.net/'}
    ]
  },
  apis: [path.resolve(__dirname, './app.js')], // This tells Swagger to read your JSDoc from app.js
};

const specs = swaggerJsdoc(options);

module.exports = specs;