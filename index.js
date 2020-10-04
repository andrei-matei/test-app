const promBundle = require("express-prom-bundle");
const os = require("os");

const express = require('express');

const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

let corsOptions = {
    exposedHeaders: ['Accept-Language',
        'Access-Control-Allow-Origin',
       'Connection', 'Content-Length', 'Content-Type', 'Date',
        'Etag', 'Server', 'Via', 'X-Powered-By']
};


const metricsMiddleware = promBundle({includeMethod: true});

const PORT = 3000;
var hostname = os.hostname();

var appcore = express();
appcore.use(metricsMiddleware);
appcore.use(cors(corsOptions));

appcore.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        {
            id: uuidv4(),
            name: 'Welcome to Core-app-1',
            hostname: hostname
        }));
});

appcore.listen(PORT, () => {
    console.log('Core-Service-1 app started on port 3000')
});