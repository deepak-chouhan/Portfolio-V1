const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect(`mongodb+srv://deepak:${process.env.PASS}@portfoliov1.i64tn.mongodb.net/portfolioV1?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const projectSchema = {
    type: String,
    title: String,
    year: Number,
    link: String,
    desc: String,
    cover: String,
    images: [],
    tools: []
}
const PROJECT = mongoose.model("project", projectSchema);

const clientSchema = {
    name: String,
    email: String,
    message: String,
    date: String
}

const CLIENT = mongoose.model("client", clientSchema);


app.get("/", function (req, res) {

    res.render("index");
})

app.get("/uploadproject", function (req, res) {

    res.render("project_upload")
})

app.get("/projects/:projecttype", function (req, res) {

    const projecttype = req.params.projecttype

    if (projecttype === "programmingandwebdev") {
        PROJECT.find({
            type: "programmingandwebdev"
        }, function (err, foundprojects) {
            if (foundprojects.length == 0) {
                res.redirect("/")
            } else {

                res.render("programming", {
                    Projects: foundprojects
                })
            }
        })
    } else if (projecttype === "programmingandwebdev_personal") {
        PROJECT.find({
            type: "programmingandwebdev_personal"
        }, function (err, foundprojects) {
            if (foundprojects.length == 0) {
                res.redirect("/")
            } else {
                res.render("programming", {
                    Projects: foundprojects
                })
            }
        })
    } else {
        PROJECT.find({
            type: projecttype
        }, function (err, foundprojects) {
            if (!err) {
                if (foundprojects.length == 0) {
                    console.log("No items found");
                    res.redirect("/")
                } else {
                    if (projecttype === "modelling_personal" || projecttype === "modelling")
                        res.render("projects", {
                            title: "3D Modelling and animation",
                            paragraph: "All of my 3D Modelling and Animation project are displayed here",
                            Projects: foundprojects
                        })
                    else if (projecttype === "uxui" || projecttype === "uxui_personal")
                        res.render("projects", {
                            title: "UX/UI Design",
                            paragraph: "All of my UX/UI design project are displayed here",
                            Projects: foundprojects
                        })
                    else if (projecttype === "gamedev")
                        res.render("projects", {
                            title: "Game Development",
                            paragraph: "All of my Game development project are displayed here",
                            Projects: foundprojects
                        })
                }
            } else {
                res.render("pagenotfound");
            }
        })
    }
})

app.get("/details/:projectid", function (req, res) {

    const requestedproject = req.params.projectid

    PROJECT.findOne({
        _id: requestedproject
    }, function (err, foundprojects) {

        if (!err) {
            if (foundprojects) {
                res.render("projectDetails", {
                    Project: foundprojects
                })
            }
        } else {
            res.render("pagenotfound");
        }

    })


})

app.get("/contact", function (req, res) {

    res.render("contact");

})

app.get("/clients", function (req, res) {

    CLIENT.find({}, function (err, foundClients) {
        if (!err && foundClients.length >= 0) {

            res.render("clients", {
                clients: foundClients
            })
        } else {
            res.render("pagenotfound");
        }
    })

})

app.get("/blog", (req, res) => {
    res.render("blog")
})

app.get("/dashboard", function (req, res) {

    CLIENT.find({}, function (err, foundClients) {
        if (!err) {
            res.render("dashboard", {
                clients: foundClients
            });
        } else {
            res.render("dashboard");
        }
    })
})

app.get("/notfound", function (req, res) {
    res.render("pagenotfound");
})


app.post("/contact", function (req, res) {

    var date = new Date();

    const client = req.body;

    const newclient = CLIENT({
        name: client.client_name,
        email: client.client_email,
        message: client.client_mssg,
        date: date
    })

    newclient.save();
    res.redirect("/contact");

})

app.post("/uploadproject", function (req, res) {
    var newobject = req.body;
    console.log(newobject);
    const newproject = new PROJECT({
        type: newobject.project_type,
        title: newobject.project_title,
        year: newobject.project_year,
        link: newobject.project_link,
        desc: newobject.project_description,
        cover: newobject.image_cover,
        images: newobject.image_link,
        tools: newobject.tools
    })
    newproject.save();
    res.redirect("/uploadproject")
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function () {
    console.log("Server started successfully")
})