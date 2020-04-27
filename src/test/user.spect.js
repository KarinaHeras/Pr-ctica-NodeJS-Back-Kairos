'use strict'

const request = require('supertest')
import app from '../src/app';


describe('User login', () => {

    it('CRUD user', async () => {
        const server = request(app);

        const newUser = {
            title: 'test',
            content: 'test',
            nameAuthor: 'author',
            nickname: 'test'
        }

        const result = await server.user('/user')
        .type('form')
        .send(newPost)
        .expect(201);

        await server
        .get('/user')
        .expect(200)

    })

})