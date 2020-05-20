const express = require('express');
const services = require('./services');
const offensiveWordsValidator = require('../../middlewares/offensiveWordsValidator');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
    services.getPosts()
    .then((result) => {
        res.json(result);
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.get('/:postId', (req, res) => {
    const postId = req.params.postId;
    services.getPostById(postId)
    .then((result) => {
        res.json(result)
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.post('/', passport.authenticate('jwt', { session : false }), (req, res) => {
    const body = req.body;
    services.createPost(body, req.user)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.delete('/:postId', passport.authenticate('jwt', { session : false }), (req, res) => {
    const postId = req.params.postId;
    services.deletePostById(postId, req.user)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.put('/:postId', passport.authenticate('jwt', { session : false }), (req, res) => {
    const postId = req.params.postId;
    const body = req.body;
    services.modifyPost(postId, req.user, body)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    })
});

router.post('/:postId/comments', passport.authenticate('jwt', { session : false }), offensiveWordsValidator.middleware, (req, res) => {
    const postId = req.params.postId;
    const body = req.body;
    services.createComment(postId, req.user, body)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    })
});

router.put('/:postId/comments/:commentId', passport.authenticate('jwt', { session : false }), offensiveWordsValidator.middleware, (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const body = req.body;
    services.modifyComment(postId, req.user, commentId, body)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    })
});

router.delete('/:postId/comments/:commentId', passport.authenticate('jwt', { session : false }), (req,res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    services.deleteComment(postId, req.user, commentId)
    .then((result) => {
        if (result && !result.error) {
            res.json(result);
        } else {
            res.status(result.status).json({ message: result.message });
        }
    })
    .catch(() => {
        res.status(500).end();
    });
});

exports.router = router;