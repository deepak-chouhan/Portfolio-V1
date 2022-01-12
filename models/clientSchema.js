const mongoose = require("mongoose");

const clientSchema = {
    name: String,
    email: String,
    message: String,
    date: String
}
const CLIENT = mongoose.model("client", clientSchema);
module.exports = CLIENT;