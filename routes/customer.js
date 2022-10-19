const express = require('express');
const router = express.Router();
const authClass = require('../api/auth');
router
    .post('/customerBooking', function(req, res) {
        return authClass.register(req, res)
    })
    

module.exports = router;