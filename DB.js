var mysql = require('mysql');
// var data = require("./app");



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Somesh@810",
  database: "tour"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE hello", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");

    // var sql = "CREATE TABLE student (name TEXT(255), address TEXT(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
    // const add1=data.req.body.addres;
    // const inputname=data.req.body.inputname;
    
  
  //   var sql = `INSERT INTO student (name, address) VALUES ("${inputname}", "${add1}")`;;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  //    });


  });
  module.exports = con;