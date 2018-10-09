

const connection = require("../config/connection.js");

function addQuestionMarks(num) {
    //referencing cats example
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(`?`);
    }
    return array.toString();
}

function objectSQL(object) {
    let value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
        //hasOwnProperty returns whether the object called has that property
        if (typeof value === `string` && value.indexOf(" ") >= 0) {
            value = `'  ${value}  '`;
            //how would I write this in es6 ${value}?
        }
        array.push(`${key} = ${value}`);
    }
    return array.toString();
}

const orm = {
    //* `selectAll()` // get, select * from SQL/read
    all: function (tableInput, cb) {
        //adding cd for callback so code waits for db
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //  * `insertOne()` // post, inserting to SQL
    create: function (table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ( ${addQuestionMarks(vals.length)})`;
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
   // * `updateOne()` // put, 
    update: function(table, objColVals, condition,cb){
        let queryString = `UPDATE ${table} SET ${objectSQL(objColVals)} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
};

// console.log(orm.all(burgers));

module.exports = orm;