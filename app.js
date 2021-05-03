const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set ("view engine", "ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/PortfolioV1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", function(req, res){

    res.render("index");
})

app.get("/uploadproject", function(req, res){

    res.render("project_upload")
})


app.post("/uploadproject", function(req, res){
    var item = req.body;
    console.log(body);
})


app.listen(3000, function () {
    console.log("Server started on port 3000")
})
