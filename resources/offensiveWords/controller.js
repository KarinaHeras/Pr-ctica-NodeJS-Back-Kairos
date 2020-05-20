const express = require('express');
const services = require('./services');

const router = express.Router();

router.get('/', (req, res) => {
    services.getOffensiveWords()
    .then((result) => {
        res.json(result);
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.get('/:offensiveWordId', (req, res) => {
    const offensiveWordId = req.params.offensiveWordId;
    services.getOffensiveWordById(offensiveWordId)
    .then((result) => {
        res.json(result)
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    services.createOffensiveWord(body)
    .then((result) => {
        res.json(result)
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.delete('/:offensiveWordId', (req, res) => {
    const offensiveWordId = req.params.offensiveWordId;
    services.deleteOffensiveWordById(offensiveWordId)
    .then((result) => {
        res.end();
    })
    .catch(() => {
        res.status(500).end();
    });
});

router.put('/:offensiveWordId', (req, res) => {
    const offensiveWordId = req.params.offensiveWordId;
    const body = req.body;
    services.modifyOffensiveWord(offensiveWordId, body)
    .then((result) => {
        res.json(result)
    })
    .catch(() => {
        res.status(500).end();
    })
});

exports.router = router;