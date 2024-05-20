const test = require('ava')
const request = require('superkoa')
const app = require('../app')

test('GET /', async t =>{
    const res = await request(app).get('/')
    t.is(res.statusCode, 200)
})