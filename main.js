/**
 * This is the entrypoint to the API.
 */
const os = require('os');
const express = require('express');
const cors = require('cors');
const databaseConnection = require('./databaseConnection.js')
const UsersService = require('./Models/users.model.js');
const UsersController = require('./controllers/users.controller.js');
const config = require('./config/config.js');
const UsersRouter = require('./routers/users.router.js');
const app = express();
app.use(cors());
app.set('view engine', 'ejs');
// Wrap this in a promise
const listener = (expressApp, port) => {
    return new Promise((resolve, reject) => {
        expressApp.listen(port, () => {
            console.log(`API Server: Listening on ${os.hostname()}: ${port}`);
            resolve();
        });
    });
};
/**
* We instantiate a database connection, and turn on the server.
*/
Promise.all([
    listener(app, config.port),
    databaseConnection()
])
/**
* All initialized entities, such as the express app, and the  are passed through, such as the database
*/
.then((initializedEntities) => {
    /**
    * Instantiate the services, controllers, and routers
    * Here the Application (general utility) and the ToDos Routers, Controllers, and Services are loaded
    */
    const usersService = new UsersService(initializedEntities[1]);
    const usersController = new UsersController(usersService);
    const usersRouter = new UsersRouter(usersController);
    app.use('/', usersRouter);
    /**
    * If the middleware above this hasn't sent back a response, then there was no matching endpoint. We send back an HTTP 404.
    */
    app.use((req, res, next) => {
        console.log(process.env.NODE_ENV)
        res.status(404);
        res.send();
    });
    /**
    * This is the error handling middleware, all errors that are passed to middleware are processed here.
    */
    app.use((error, req, res, next) => {
        console.error(`api-server: ${error}`);
        res.status(500);
        res.send();
    });
})
.catch((reason) => {
    console.error(reason);
    process.exit(1);
});