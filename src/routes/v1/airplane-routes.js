const express = require('express');

const {AirplaneController} = require('../../controllers');
const route = express.Router();
route.post('/', AirplaneController.createAirplane);

module.exports = route;