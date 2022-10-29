const http = require('http');

const routeHandler = require('./route')


const server = http.createServer(routeHandler.handler);

server.listen(3000);
