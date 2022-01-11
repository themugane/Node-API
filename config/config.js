/**
 *Set up configuration
 */
 let NODE_ENV = process.env.NODE_ENV || "development";
 const config = {
     "development": {
         "port": 1000,
         "x-powered-by": "Node JS API PATTERN",
     },
     "TEST": {
         "port": 1000,
         "x-powered-by": "Node JS API PATTERN",
     },
 };
 /**
  * Export out the configuration data only for the environmnt specified by NODE_ENV.
  */
 module.exports = config[NODE_ENV];