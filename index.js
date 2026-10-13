const os = require("os");
const express = require('express');
var appcore = express();
appcore.set('trust proxy', true);
const {
    v4: uuidv4
} = require('uuid');

const PORT = process.env.PORT || 3000;
var hostname = os.hostname();

appcore.use(express.urlencoded({
    extended: true
}))

function generateUuid() {
    return uuidv4();
}

appcore.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const id = generateUuid();
    res.send(JSON.stringify({
        id: id,
        name: 'Test app',
        hostname: hostname
    }));
    console.log(id, req.method, req.hostname, req.ip);
});

appcore.get('/uuid', (req, res) => {
    const id = generateUuid();
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a GET HTTP method ${id}`);
});

appcore.post('/uuid', (req, res) => {
    const id = generateUuid();
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a POST HTTP method ${id}`);
});

appcore.put('/uuid', (req, res) => {
    const id = generateUuid();
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a PUT HTTP method ${id}`);
});

appcore.patch('/uuid', (req, res) => {
    const id = generateUuid();
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a PATCH HTTP method ${id}`);
});

appcore.delete('/uuid', (req, res) => {
    const id = generateUuid();
    console.log(id, req.method, req.hostname, req.ip);
    return res.send(`Received a DELETE HTTP method ${id}`);
});

appcore.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        status: 'OK',
    }));
});

const server = appcore.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
});

function gracefulShutdown(signal) {
    console.log(`${signal} signal received: closing HTTP server`);
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));