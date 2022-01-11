const knexfile = require('./knexfile');

const DB_ENV = process.env.DB_ENV || "development";

const dbConfig = knexfile[DB_ENV]

const dbConnection = require('knex')(dbConfig)

module.exports = dbConnection