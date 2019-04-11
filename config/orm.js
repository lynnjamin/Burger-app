var connection = require("../config/connection.js");



function printQuestionMarks(num) {
     var arr = [];
     for (var i = 0; i < num; i++) {
       arr.push("?");
     }
     return arr.toString();
   }

// HELPER FUNCTION FOR SQL SYNTAX
function objToSql(ob) {
     var arr = [];
     for(var key in ob) {
          var value = ob[key];
          console.log(value);
          if(Object.hasOwnProperty.call(ob, key)){ 
               if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                  }
                  // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
                  // e.g. {sleepy: true} => ["sleepy=true"]
                  arr.push(key + "=" + value);
                }
           }
           return arr.toString();
          
}

//Object for all our SQL statement functions.
var orm = {
     selectAll: (table, cb) => {
          var queryString = "SELECT * FROM" + table + ";";
          connection.query(queryString, (err, result) => {
               if (err) {
                    throw err;
               }
               cb(result);
          });
     },
     insertOne: (table, column, values, cb) => {
          var queryString = "INSERT INTO" + table;

          queryString += " (";
          queryString += column.toString();
          queryString += ") ";
          queryString += "VALUES (";
          queryString += printQuestionMarks(vals.length);
          querySTring += ") ";

          console.log(queryString);
          connection.query(queryString, values, (err, result) => {
               if(err) {
                    throw err;
               }
               cb(result);
          });
     },
     updateOne: (table, condition, cb) => {
          var queryString = "DELETE FROM " + table;
          queryString += "WHERE ";
          queryString += condition;

          connection.query(queryString, (err, result) => {
               if (err) {
                    throw err;
               }
               cb(result);
          });    
     }
};


module.exports = orm;