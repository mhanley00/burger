//const orm = require("orm") // not right file path, remember to change

// * Also inside `burger.js`, create the code that will call 
//the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(result){
            cb(result);
        });
    }

};

module.exports = burger;

// const orm = {
//     all: function(tableInput, cb){
//         //adding cd for callback so code waits for db
//         let queryString = `SELECT * FROM ${tableInput};`;
//         connection.query(queryString, function(err, res){
//             if(err){
//                 throw err;
//             }
//             cb(res);
//         });
//     }
// }