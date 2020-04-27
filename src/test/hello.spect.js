const request = require('supertest')
const app = require('.././../app')

describe('Hello Enpoint', () => {

    it('GET /hello', async () => {
        await request(app)
        .get('/hello')
        .expect(200, 'Hello from repository**')
    })
})