/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('test home', async () => {

    const res = await request(app).get('/');

    expect(res.text).toEqual('hello there');
    expect(res.type).toEqual('text/html');
  });

});
