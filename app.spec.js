const request = require('supertest');
const app = require('./server').server;

describe('System tests', () => {
    const testUser = {
        token: '',
        id: '',
        username: 'testUser',
        password: 'testPass',
        role: 'admin'
    };
    let postId;

    it('Create user', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .post('/users')
        .send(testUser)
        .expect(200)
        .then(response => {
            expect(response.body.username).toEqual(testUser.username);
            testUser.id = response.body.id;
        });
    });

    it('Login user', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .post('/login')
        .auth(testUser.username, testUser.password)
        .expect(200)
        .then(response => {
            expect(response.body.token.length).toBeGreaterThan(0);
            testUser.token = response.body.token;
        });
    });

    it('Create post', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .post('/posts')
        .set('Authorization', `Bearer ${testUser.token}`)
        .set('Content-Type', 'application/json')
        .send({author: testUser.id, nickname: 'nano', title: 'Bob Esponja', text: 'serie', comments: []})
        .expect(200)
        .then(response => {
            expect(response.body.author).toEqual(testUser.id);
            expect(response.body.nickname).toEqual('nano');
            expect(response.body.title).toEqual('Bob Esponja');
            expect(response.body.text).toEqual('serie');
            postId = response.body._id;
        });
    });
    it('Create comment without offensive words', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .post(`/posts/${postId}/comments`)
        .set('Authorization', `Bearer ${testUser.token}`)
        .set('Content-Type', 'application/json')
        .send({author: testUser.id, nickname: 'nano', content: 'dibujos'})
        .expect(200)
    });
    it('Create comment with offensive words', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .post(`/posts/${postId}/comments`)
        .set('Authorization', `Bearer ${testUser.token}`)
        .set('Content-Type', 'application/json')
        .send({author: testUser.id, nickname: 'nano', content: 'Pues caca'})
        .expect(400)
        .then(response => {
            expect(response.body.message).toEqual('Las palabras caca (nivel 1) no están permitidas');
        });
    });
    it('Delete post', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .delete(`/posts/${postId}`)
        .set('Authorization', `Bearer ${testUser.token}`)
        .set('Content-Type', 'application/json')
        .expect(200)
    });
    it('Delete user', async () => {
        await request(app)
        //await request('http://localhost:3000')
        .delete(`/users/${testUser.id}`)
        .set('Authorization', `Bearer ${testUser.token}`)
        .set('Content-Type', 'application/json')
        .expect(200)
    });
});

