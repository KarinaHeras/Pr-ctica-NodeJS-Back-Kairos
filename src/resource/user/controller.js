'use strict'
const express = require('express');
const userService = require('./service.js')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const users = await usersService.getAll();
        res.status(200).json(users);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
    
})

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const users = await usersService.getById(id);
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newUsers = await usersService.addUsers(req.body);
        res.status(201).send(newUsers);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const users  = req.body;
        const result = await PostService.updateUsers(id, post);
        if (result !== null) {
            res.status(200).json(result);
        }else{
            res.status(404).json({message: 'Usuario no encontrado'})
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
        const result = await usersService.deleteUsers(id);
        if (result !== null) {
            res.status(200).json(result);
        }else{
            res.status(404).json({message: 'Usuario no encontrado'})
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
});

router.put('/:id/comment', OffensiveValidator.checkwords, async(req, res, next) => {
    try {
        const id = req.params.id;
        const comment = req.body;
        console.log('id', id);
        console.log('comment', comment);
        const usersUpdate = await usersService.addComment(id, comment);
        res.status(200).json(usersUpdate);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
});

export default router;