const mongoose = require("mongoose");

const projectSchema = {
    type: String,
    title: String,
    year: Date,
    link: String,
    desc: {type: String, default: "empty"},
    body: {type: String, default: "empty"},
    cover: String,
    images: [],
    tools: []
}
const PROJECT = mongoose.model("project", projectSchema);
module.exports = PROJECT;