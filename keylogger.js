/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
// var keylogger = require('./keylogger');
// keylogger();
/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

/* --- Your code goes here --- */
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));
router.get('/', function(req, res) {
    console.log("Access Contact Us");
    res.sendFile(__dirname + '/index.html');
});

// router.post("/submit-form",(req,res)=>{
//     console.log(`Form submitted by ${req.body.name}`);
//     const fname = req.body.name;
//     const Uemail = req.body.email;
//     const Utxt = req.body.messages;
//     res.send(`<h1>Greeting <mark style="background-color:#D5BBE0">${fname}</mark></h1> <p>The following message has been received: <mark style="background-color: #99D3F9">${Utxt}</mark> We will contact you via <mark style="background-color: #AFF466">${Uemail}</mark></p>`);
//    });
   
router.use((req, res, next) => {
    res.status(404).send("Where are you going?");
});




/* --- ------------------- --- */

/* Server listening */
app.listen(3030, function () {
    console.log("Server listening at Port 3030");
});