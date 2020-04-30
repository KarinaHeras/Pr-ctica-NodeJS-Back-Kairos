'use strict'


const  express = require('express')
const OffensiveValidator = require('../../middlewares/offensive-validator')
const CommentsService = require('./service')

const router = express.Router();

router.put('/:id', OffensiveValidator.checkwords, async(req, res, next) => {
    try {
        const id = req.params.id;
        const comment = req.body;
        const result = await CommentsService.updateComment(id, comment);
        if (result !== null) {
            res.status(200).json(result);
        }else{
            res.status(404).json({message: 'Recurso no encontrado'})
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const result = await CommentsService.deleteComment(id);
        if (result !== null) {
            res.status(200).json(result);
        }else{
            res.status(404).json({message: 'Recurso no encontrado'})
        }
    } catch (error) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
});

export default router;