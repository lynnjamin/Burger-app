var orm = require("../config/orm.js");


var burger = {
selectAll: (cb) => {
     orm.selectAll("burgers", (res) => {
          cb(res);
        });
},
insertOne: (columns, values, cb) => {
     orm.insertOne("burgers", columns, values, (result) => {
          cb(result)
     });
},
updateOne: (objColVals, condition, cb) => {
     orm.updateOne("burgers", objColVals, condition, function(result) {
          cb(result);
        });
     }
};

module.exports = burger;