const express = require('express');
const router = express.Router();

// helpers
const isLogin = require('../helper/isLogin');

router.get('/', isLogin, (req, res) => {
    res.send("profile sayfası");
});

module.exports = router;