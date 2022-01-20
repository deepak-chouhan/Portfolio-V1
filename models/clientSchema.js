const mongoose = require("mongoose");

const clientSchema = {
    name: String,
    email: String,
    message: String,
    date: Date
}
const CLIENT = mongoose.model("client", clientSchema);
module.exports = CLIENT;