const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.set("view engine", "ejs");
app.set("views", "views")

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect(`mongodb+srv://deepak:${process.env.PASS}@portfoliov1.i64tn.mongodb.net/portfolioV1?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PROJECT = require("./models/projectSchema");
const CLIENT = require("./models/clientSchema");

// Routes
const index = require("./routes/main")
app.use("/", index);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function () {
    console.log("Server started successfully")
})