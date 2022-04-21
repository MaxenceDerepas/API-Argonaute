const mongoose = require("mongoose");

const Member = mongoose.model("Member", {
    name: String,
});

module.exports = Member;
