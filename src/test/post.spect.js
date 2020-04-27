'use strict'

const request = require('supertest')
import app from '../src/app';


describe('Post Enpoint', () => {

    it('CRUD POST', async () => {
        const server = request(app);

        const newPost = {
            title: 'test',
            content: 'test',
            nameAuthor: 'author',
            nickname: 'test'
        }

        const result = await server.post('/post')
        .type('form')
        .send(newPost)
        .expect(201);

        await server
        .get('/post')
        .expect(200)

    })

})