const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/passwordDB", {useNewUrlParser:true , useUnifiedTopology: true });

const passwordSchema = {
    password : String
}

const Password = mongoose.model("Password", passwordSchema);

app.listen(3000,(req,res)=>{
    console.log("Server started successfully in 3000");
})
