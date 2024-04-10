const request = require('supertest')

const koa = require('../app')

request(app)
    .get('/get')
    .expect(200)
    .end((err,res)=>{
        console.log(err)
    })