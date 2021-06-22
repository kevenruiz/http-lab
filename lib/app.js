/* eslint-disable keyword-spacing */
const net = require('net');
//const fs = require('fs');
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
          contextType: 'Hi there'
        })
      );
    }

    else if (request.path === '/echo' && request.method === 'POST') {
      socket.write(createResponse({ body: request.body, contentType: 'text/plain', status: '200 OK' })
      );
    }

    else if (request.path === '/red' && request.method === 'GET') {
      socket.write(createResponse({
        body: '<h1>red<h1>'
      })
      );
    }

    else if (request.path === '/green' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>green<h1>' })
      );
    }

    else if (request.path === '/blue' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>blue<h1>' })
      );
    }

    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }

  });
});

module.exports = app;
