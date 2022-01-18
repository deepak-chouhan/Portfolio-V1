const express = require('express');
const router = express.Router();

const PROJECT = require("../models/projectSchema");
const CLIENT = require("../models/clientSchema");

router.get("/", function (req, res) {
    res.render("index");
})

router.get("/uploadproject", function (req, res) {

    res.render("project_upload")
})

router.get("/projects/:projecttype", function (req, res) {

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

router.get("/details/:projectid", function (req, res) {

    const requestedproject = req.params.projectid

    PROJECT.findOne({
        _id: requestedproject
    }, function (err, foundproject) {

        if (!err) {
            if (foundproject) {
                console.log(foundproject.desc.length)
                if (foundproject.desc != "empty") {
                    res.render("projectDetails", {
                        Project: foundproject
                    })
                } else {
                    res.render("blog", {
                        Project: foundproject
                    })
                }
            }
        } else {
            res.render("pagenotfound");
        }

    })


})

router.get("/contact", function (req, res) {

    res.render("contact");

})

router.get("/clients", function (req, res) {

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

router.get("/dashboard/client/remove/:clientId", (req, res) => {

    CLIENT.findByIdAndDelete(req.params.clientId, (err) => {
        if (!err) {
            res.redirect("/dashboard");
        }
    })

})

router.get("/blog", (req, res) => {
    res.render("blog")
})

router.get("/dashboard", function (req, res) {

    CLIENT.find({}, function (err, foundClients) {
        PROJECT.find({}, (err, foundProjects) => {
            if (!err) {
                res.render("dashboard", {
                    clients: foundClients,
                    projects: foundProjects
                });
            } else {
                res.render("dashboard");
            }
        })
    })
})

router.get("/dashboard/project/remove/:projectId", (req, res) => {

    PROJECT.findByIdAndDelete(req.params.projectId, (err) => {
        if (!err) {
            res.redirect("/dashboard")
        }
    })

})

router.get("/notfound", function (req, res) {
    res.render("pagenotfound");
})

router.post("/contact", function (req, res) {

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

router.post("/uploadproject", function (req, res) {
    var newobject = req.body;
    // console.log(newobject);
    const newproject = new PROJECT({
        type: newobject.project_type,
        title: newobject.project_title,
        year: newobject.project_year,
        link: newobject.project_link,
        body: newobject.blogbody,
        cover: newobject.image_cover,
        tools: newobject.tools
    })
    newproject.save();
    res.redirect("/uploadproject")
})

module.exports = router;