const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({data: "response from home route"})
});

router.put("/", (req, res) => {
    // some code
});

router.post("/", (req, res) => {
    // some code
});

router.delete("/", (req, res) => {
    // some code
});

module.exports = router;