/**
* Users router.
*/
const express = require('express');
module.exports = function UserRouter(userController) {
    const router = express.Router();
    /* Parse HTTP request bodies as JSON */
    router.use(express.json());
    /**
    * Get all users
    */
    router.get('/', (req, res, next) => {
        userController.getUsers()
        .then((users) => {
            res.render('index', {users: users});
            // res.send(users);
        })
        .catch(next)
    });
    router.get('/:id', (req, res, next) => {
        userController.getUser(req.params.id)
        .then((user) => {
            res.send(user)
            // res.sendStatus(200);
        })
        .catch(next);
    });
    /**
    *  Create a new user
    */
    router.post('/', (req, res, next) => {
        userController.createUser(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(next)
    });
     /**
    * Update users records. Rewrites all fields
    */
    router.put('/:id', (req, res, next) => {
        userController.updateUser(req.params.id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(next);
    });
    /**
    * Delete  User
    */
    router.delete('/:id', (req, res, next) => {
        userController.deleteUser(req.params.id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(next)
    });
    return router;
};