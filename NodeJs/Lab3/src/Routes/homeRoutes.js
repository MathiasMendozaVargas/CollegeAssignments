const express = require('express');
const homeRoutes = express.Router();
const path = require('path');

homeRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

module.exports = homeRoutes;