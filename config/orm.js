var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            return cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ?? (${cols.join(",")}) VALUES (${vals.join(",")})`;
        connection.query(queryString, table, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (){

    }
};

module.exports = orm;