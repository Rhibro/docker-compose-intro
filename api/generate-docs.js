const fs = require('fs');
const path = require('path');
const spec = require('./swaggerConfig');

const docsDir = path.join(__dirname, 'docs');

if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
}

fs.writeFileSync(
    path.join(docsDir, 'openapi.json'),
    JSON.stringify(spec, null, 2)
);

console.log('OpenAPI documentation successfully generated to /docs/openapi.json');