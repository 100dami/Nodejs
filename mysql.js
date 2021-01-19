var mysql = require("mysql");
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "0223",
    database : "first"
});

connection.connect();

connection.query("SELECT * FROM topic", function(error, results,fields){
    if(error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();