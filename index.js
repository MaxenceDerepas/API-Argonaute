const express = require("express");
const formidable = require("express-formidable");
const app = express();
app.use(formidable());
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const memberRoutes = require("./routes/member");
app.use(memberRoutes);

app.all("*", (req, res) => {
    res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
    console.log("Server has started");
});
