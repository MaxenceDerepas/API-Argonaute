const express = require("express");
const router = express.Router();

// Import models
const Member = require("../models/Member");

router.get("/Member", async (req, res) => {
    try {
        const Members = await Member.find();
        res.status(200).json(Members);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/Member/create", async (req, res) => {
    try {
        const newMember = new Member({
            name: req.fields.name,
        });

        await newMember.save();
        const Members = await Member.find();
        res.json(Members);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
