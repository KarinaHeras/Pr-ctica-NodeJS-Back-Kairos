const CommentController = require( './resources/comments/controller');
const helloController = require('./resources/hello/controller')
const  OffensiveWordController = require ('./resources/offensivewords/controller')
const postController = require('./resources/post/controller')
const auth = require('./src/minddlewares/auth')
const useContr = require('./src/App/controllers/user')


export default app => {
    app.use('/hello', helloController);
    app.use('/post', postController);
    app.use('/comment', CommentController);
    app.use('/offensivewords', OffensiveWordController);
    app.get('/private', auth, (req , res) =>{
        res.status(200).send({message: 'Tienes acceso'})
    } )
}
