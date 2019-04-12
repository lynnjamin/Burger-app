var connection = require("../config/connection.js");

//Object for all our SQL statement functions.
var orm = {
     selectAll: (table, cb) => {
          connection.query("SELECT * FROM ??", [table], (err, result) => {
               if (err) throw err;
               cb(result);
          });
     },
     insertOne: (table, column, values, cb) => {
          connection.query("INSERT INTO ?? (??) VALUES (?)", [table, column, values], (err, result) => {
               if (err) throw err;
               cb(result);
               });
     },
     updateOne: (table, devoured, column, values, cb) => {
          connection.query("UPDATE ?? SET ?? WHERE ??=?", [table, devoured, column, values], (err, result) => {
          if (err) throw err;
          cb(result);
          });
     }
};

module.exports = orm;