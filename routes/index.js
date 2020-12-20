const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.status(200).send("Welcome to Cinema-Booking Server")
})

// Not Found Route
router.get('*', (req, res) => {
    res.status(404).send('Booking | 404 Not Found')
})

module.exports = router;