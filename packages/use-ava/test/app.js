'use strict'

import test from 'ava'
import supertest from 'supertest'
import koa from '../app'

const app = koa.callback()
test.cb('GET /', t=>{
    supertest(app)
})