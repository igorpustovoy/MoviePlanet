const express = require("express");
const client = require('../config/psqlClient');
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
    const actors = await client.query("SELECT * FROM actor");
    res.set('Access-Control-Allow-Origin', '*');
    return res.send(actors.rows);
});


module.exports = router;
