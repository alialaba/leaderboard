const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get("/", (req, res) => {
    fs.readFile("leaderboard.json", (err, data) => {
        if (err) console.log(err);
        let leaderboards = JSON.parse(data); 
        /*console.log(data); */
        res.send(leaderboards);
    });
});



module.exports = router;