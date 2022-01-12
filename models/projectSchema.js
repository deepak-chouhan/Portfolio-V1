const mongoose = require("mongoose");

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
module.exports = PROJECT;