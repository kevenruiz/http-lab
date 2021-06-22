/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('test home', async () => {

    const res = await request(app).get('/');
    expect(res.text).toEqual('hello there');


  });

  it('it gets a body from /echo', async () => {

    const res = await request(app).post('/echo').send('something');
    expect(res.text).toEqual('something');


  });

  it('it gets color red from /red', async () => {

    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red<h1>');

  });

});
