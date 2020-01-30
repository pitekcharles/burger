var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Xiyuan18",
    database: "burgers_db"
});

connection.connect(function (error){
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;