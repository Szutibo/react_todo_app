const express = require('express');
const db = require('./db');
const router = express.Router();

// Get users
router.get('/users', async (req, res) => {
    try {
        let result = await db.users();
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get one user's tasks
router.get('/:id', async (req, res) => {
    try {
        let result = await db.oneUser(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Create new user
router.post('/create/user', async (req, res) => {
    try {
        let result = await db.createUser(req.body);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Create new task
router.post('/create/task', async (req, res) => {
    try {
        let result = await db.createTask(req.body);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Delete task
router.delete('/:id', async (req, res) => {
    try {
        let result = await db.deleteTask(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Update task
router.put('/', async (req, res) => {
    try {
        let result = await db.updateTask(req.body);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;