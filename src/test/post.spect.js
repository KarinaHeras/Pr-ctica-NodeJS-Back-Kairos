// 'use strict'

// const app = require('./server') // Link to your server file
// const supertest = require('supertest')
// const request = supertest(app)
// describe('Post Enpoint', () => {
  
// app.get('/test', async (req, res) => {
//     res.json({message: 'pass!'})
//   })

//   it('gets the test endpoint', async done => {
//     const response = await request.get('/test')
  
//     expect(response.status).toBe(200)
//     expect(response.body.message).toBe('pass!')
//     done()
//   },
//     app.post('/signup', async (req, res) => {
//       const { name, email } = req.body 
//       const user = new User({name, email})
//       const ret = await user.save()
//       res.json(ret)
//     }),
//     it('Debería guardar a la usuario en la base de datos', async done => {
//       const res = await request.post('/signup')
//         .send({
//           name: 'Karina',
//           email: 'testing@gmail.com'
//         })
//       done()
//     })


    
