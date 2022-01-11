// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {host:'localhost', port : 3306, user : 'root', password : '',  database:"nodemvc"}, //"postgres://postgres:postgres@postgres:5432/employees",  //{host:'localhost', database:"employees"},
    migrations: {directory:'./migrations'},
    seeds:{directory:'/data/seeds'},
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {directory:'./migrations'},
    seeds:{directory:'/data/seeds'},
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {directory:'./migrations'},
    seeds:{directory:'/data/seeds'},
    useNullAsDefault: true
  }

};
