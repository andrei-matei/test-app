const os = require("os");

const express = require('express');

const { v4: uuidv4 } = require('uuid');

const PORT = 3000;
var hostname = os.hostname();

var appcore = express();
appcore.use(express.urlencoded({ extended: true }))

appcore.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    id = uuidv4()
    res.send(JSON.stringify(
        {
            id: id,
            name: 'Welcome to Core-app-1',
            hostname: hostname
        }));
        console.log(id,req.hostname,"-",req.ip,"-",req.method,":",req.body.testBody);
});

appcore.listen(PORT, () => {
    console.log('Core-Service-1 app started on port 3000')
});