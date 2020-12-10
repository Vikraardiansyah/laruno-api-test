const express = require('express');
const Route = express.Router();
const { postCost } = require('../controllers/cost');

Route.post('/', postCost);

module.exports = Route;
