/* eslint-disable space-before-function-paren */
const request = require('supertest');
const app = require('../lib/app');
const fsPromise = require('fs/promises');

describe('app routes', () => {

  it('test home', async () => {

    const res = await request(app).get('/');

    expect(res.text).toEqual('hello there');
    expect(res.type).toEqual('text/html');
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
