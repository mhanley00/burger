// * In the `orm.js` file, create the methods that will execute 
// the necessary MySQL commands in the controllers. These are 
//the methods you will need to use in order to retrieve and store 
//data in your database.

//      * `selectAll()` // get, select * from SQL/read
//      * `insertOne()` // post, inserting to SQL
//      * `updateOne()` // put, 

//    * Export the ORM object in `module.exports`.
const connection = require("../config/connection.js");

function addQuestionMarks(num){
    //referencing cats example
    let array = [];
    for (let i =0; i<num; i++){
        array.push(`?`);
    }
    return array.toString();
}

function objectSQL(object){
    let value = object[key];
    if(Object.hasOwnProperty.call(object, key)){
        //hasOwnProperty returns whether the object called has that property
        if(typeof value === `string` && value.indexOf(" ") >= 0){
            value = `'  ${value}  '`;
            //how would I write this in es6 ${value}?
        }
        array.push(`${key} = ${value}`);
    }
    return array.toString();
}

const orm = {
    all: function(tableInput, cb){
        //adding cd for callback so code waits for db
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    }
};

// console.log(orm.all(burgers));

module.exports = orm; 