const test = require('ava')
const supertest = require('supertest')
const koa = require('../app')

const app = koa.callback()
test.cb('GET /', t=>{
    supertest(app)
        .get('/')
        .expect(200, (err,res)=>{
            t.ifError(err)
            
            let userId = res.body.id
            t.regex(res.text, /Hello Koa/, 'res.text == Hello Koa')

            t.end()
        })
})