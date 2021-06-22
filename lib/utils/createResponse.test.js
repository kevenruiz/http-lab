
const createResponse = require('./createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: '<h1>Hi</h1>',
      status: '200 OK',
      contentType: 'text/html'
    });

    expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 11
Content-Type: text/html\r
\r
<h1>Hi</h1>`);
  });
});
