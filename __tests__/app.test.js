/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');
const fsPromise = require('fs/promises');

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

  it('it gets color red from /green', async () => {

    const res = await request(app).get('/green');
    expect(res.text).toEqual('<h1>green<h1>');

  });
  it('it gets color red from /blue', async () => {

    const res = await request(app).get('/blue');
    expect(res.text).toEqual('<h1>blue<h1>');

  });



});

describe('promise routes', () => {

  it('public folder index.html file', async () => {
    const res = await request(app).get('/index.html');
    const expected = await fsPromise.readFile('public/index.html', 'utf-8');

    expect(res.status).toEqual(200);
    expect(res.text).toEqual(expected);
  });




});


