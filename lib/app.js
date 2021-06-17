/* eslint-disable keyword-spacing */
const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    // const requestBody = request.body;
    const path = request.path;
    const method = request.method;

    if ((path === '/') && (method === 'GET')) {
      socket.write(
        createResponse({
          body: 'hello there',
          contextType: 'text/html'
        })
      );
    }

  });
});

module.exports = app;
