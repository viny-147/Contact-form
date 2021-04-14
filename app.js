const express = require("express");
const app = express();
const bodyparse = require("body-parser");
var mysql = require('mysql');
const ejs = require("ejs");
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyparse.urlencoded({extended: true}));
var obj={};
//Connection to database
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tkdb'
});

con.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
});
//Creating table
var sql="CREATE TABLE IF NOT EXISTS customer(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, uname VARCHAR(255), umail VARCHAR(255), umsg VARCHAR(255))"
con.query(sql, function (err, result) {
  if (err) console.log(err);
  console.log("Table created");
});
//showing the data
app.get("/",function(req, res){

  res.sendFile(__dirname+"/index.html");

});

//inserting the data
app.post("/", function(req,res){
   var uname = req.body.uname;
   var umail = req.body.umail;
   var msg = req.body.msg;
var ins ="INSERT INTO customer (uname, umail, umsg) VALUES ?"
var values = [[uname, umail, msg]];

con.query(ins,[values], function(err, ans){
  if(err) console.log(err);
  console.log("record inserted");
  res.redirect("/");
})
})

//view of data
app.get("/admin", function(req, res){
  con.query("SELECT * FROM customer", function (err,rows) {
  if(err) console.log(err);
  obj={print: rows};
  res.render('lists',obj);
  console.log(rows);
});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
