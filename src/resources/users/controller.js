import express from 'express';
import passport from 'passport';
import services from './service';


const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    services.createUser(body)
    .then((result) => {
        res.json({ username: result.username, id: result._id });
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.delete('/:userId', passport.authenticate('jwt', { session : false }),(req, res) => {
    const userId = req.params.userId;
    services.deleteUserById(userId)
    .then((result) => {
        if (result && !result.error) {
            res.json({ id: result._id });
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    });
});

exports.router = router;