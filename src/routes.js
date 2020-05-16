import AuthController from './resources/auth/controller';
import CommentController from './resources/comments/controller';
import OffensiveWordController from './resources/offensivewords/controller';
import PostController from './resources/post/controller';
import UsersController from './resources/users/controller';
const cors = require('cors');

export default app => {
    app.use(cors());
    app.use('/posts', PostController);
    app.use('/comments', CommentController);
    app.use('/offensivewords', OffensiveWordController);
    app.use('/auth', AuthController);
    app.use('/users', UsersController);
  
}

