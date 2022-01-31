const os = require("os");
const express = require('express');
var appcore = express();
const {
    v4: uuidv4
} = require('uuid');

const PORT = 3000;
var hostname = os.hostname();

appcore.use(express.urlencoded({
    extended: true
}))

function generateUuid() {
    return uuidv4();
}

appcore.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    id = generateUuid()
    res.send(JSON.stringify({
        id: id,
        name: 'Test app',
        hostname: hostname
    }));
    console.log(id, req.method, req.hostname, req.ip);
});

appcore.get('/uuid', (req, res) => {
    id = generateUuid()
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a GET HTTP method ${id}`);
});

appcore.post('/uuid', (req, res) => {
    id = generateUuid()
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a POST HTTP method ${id}`);
});

appcore.put('/uuid', (req, res) => {
    id = generateUuid()
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a PUT HTTP method ${id}`);
});

appcore.delete('/uuid', (req, res) => {
    id = generateUuid()
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a DELETE HTTP method ${id}`);
});

appcore.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        status: 'OK',
    }));
});

appcore.listen(PORT, () => {
    console.log('Application started on port 3000')
});