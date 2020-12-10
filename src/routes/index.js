const express = require('express');
const Route = express.Router();

const cityRoutes = require('./city');
const costRoutes = require('./cost');

Route.use('/city', cityRoutes);
Route.use('/cost', costRoutes);

module.exports = Route;
