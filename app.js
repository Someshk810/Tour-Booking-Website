const express = require("express");
const bodyParser = require("body-parser");
const db = require("./DB");

// var mysql = require('mysql');

const app = express();

//to use local css and image file on server public is folder name
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));




app.get("/contact", (req,res)=>{
  res.sendFile(__dirname +"/contact.html");
});

app.post("/contact", (req,res,next)=>{
  
   
    const formData = req.body;
    console.log(req.body);
    const add1=req.body.address;
    const inputname=req.body.inputname;
    const message = req.body.message;
    const email = req.body.email;
    const mob = req.body.mobile;

    // console.log(add1);
    // console.log(inputname);

    var sql1 = `INSERT INTO query (email,name,mob_no, msg ) VALUES ("${email}","${mob}", "${inputname}","${message}")`;
    console.log(sql1);
      db.query(sql1,  (err, result)=> {
        if (err) throw err;
        console.log("1 record inserted");
        
         });
         


        res.send("Hello Completed");
            // res.sendFile(__dirname +"/secondPage.html");
            
            
});

app.get("/", (req,res)=>{
  res.sendFile(__dirname +"/index.html");
});

app.get("/secondPage", (req,res)=>{
    res.sendFile(__dirname +"/secondPage.html");
});


app.post("/secondPage", (req,res)=>{
  res.send("HELLO");
  //  res.redirect("/");
});


app.get("/about", (req,res)=>{
  res.sendFile(__dirname +"/about.html");
});


app.post("/about", (req,res)=>{
res.send("HELLO");
//  res.redirect("/");
});

app.get("/packages", (req,res)=>{
  res.sendFile(__dirname +"/packages.html");
});





app.listen(3000, ()=>{
    console.log("Server Started on 3000 port");
});

const myName = "Somesh"

module.exports={myName};