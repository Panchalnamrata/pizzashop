//importing module

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
const route = require('./route/routes');

var app = express();

//connect to mongodb:
mongoose.connect("mongodb://localhost:27017/pizza");

//on connection:
mongoose.connection.on("connected", ()=>{
    console.log("COnnected at port 27017");
});

//on connection err:
mongoose.connection.on("error",(err)=>{
    console.log(err);
});

const PORT = 4000;

//adding middleware:cors
app.use(cors());

//adding middleware:bodyparser
app.use(bodyparser.json());

//when there is a request ending with api all req will b dierted to routes.api file.
app.use('/pizza',route);

//sending response on route to test:
app.get('/',(req,resp)=>{
    resp.send("Hello");
});

app.listen(PORT,()=>{
    console.log("Server has been started at port: "+PORT);
});