const express = require('express');
const mysql = require('mysql');

const app = express();

var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test_db",
    port:"3306"
})

connection.connect((err) =>{
    if(err){
        throw err
    } else{
        console.log("connected")
    }
})

connection.query('CREATE TABLE tabletest(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, thing VARCHAR(255) NOT NULL)',(err,rows) =>{
    if(err){
        throw err
    } else {
        console.log("DATA SENT BOIS")
        console.log(rows)
    }
})

const port = process.env.PORT || 5000;
app.listenerCount(port);

console.log("App is listening on port " + port)
