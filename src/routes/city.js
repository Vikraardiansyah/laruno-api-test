const express = require('express');
const Route = express.Router();
const { getCity } = require('../controllers/city');

Route.get('/', getCity);

module.exports = Route;
