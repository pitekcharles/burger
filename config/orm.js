var connection = require("./connection.js");

var orm = {
    selectAll: function (cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, ["burgers"], function(err, result){
            if (err) throw err;
            return cb(result);
        });
    },
    insertOne: function(val, cb) {
        var queryString = `INSERT INTO burgers (burger_name) VALUES ($)`;
        connection.query(queryString, val, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (val, condition, cb){
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{ devoured: true},{ burger_name: val}], function(err, result){
            if (err) throw err;
            cb(result);

        });
    }
};

module.exports = orm;