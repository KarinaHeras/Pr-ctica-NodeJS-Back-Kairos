//import Base64 from 'Base64';
import request from 'supertest';
import app from '../src/app';


describe('Post Enpoint', () => {

    it('CRUD POST', async () => {

        const server = request(app);

        const postsInitial = await server
        .get('/posts')
        .expect(200);

        const numberPosts = postsInitial.body.length;

        const credentials = {
            username: 'admin',
            password: '1234'
        }
        
        const newPost = {
            title: 'node',
            content: 'test.js',
            nameAuthor: 'karina',
            nickname: 'karito'
       
     } 

    })

})