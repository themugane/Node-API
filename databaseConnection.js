/**
* this is a database connection that has just been opened, which we pass into our components.
*/
const database = require('./database/db');
const connectToDatabase = () => {
    let databaseFunctions = function () {
        // 
    };
    // Insert a record and return it (POST)
    databaseFunctions.prototype.insert = function (userDetails) {
        return database('users').insert(userDetails)
    };
    // Update a record by its key and return it (PUT)
    databaseFunctions.prototype.update = function (userId, userDetails) {
        console.log("db", userId)
        return database('users').where({id:userId}).update({...userDetails})
    };
    // Find all records and return them (GET)
    databaseFunctions.prototype.getAll = function () {
        return database.select().from('users')//.where({ status: true })
    };
    //  Find a single record
    databaseFunctions.prototype.getOne = function (userId) {
        // console.log("db", userId);
        // return database.select().from('users')
        return database('users').where({id:userId})
        // return "This is that";
    }
    // Change active status to false (DELETE)
    databaseFunctions.prototype.delete = function (userId) {
        return database('users').where({id:userId}).update({ status: false })
    };
    // Return a promise that resolves the database
    // We do this so that we mimic getting a database connection asynchronously
    return new Promise((resolve, reject) => {
        resolve(new databaseFunctions());
    });
 };
 module.exports = connectToDatabase;