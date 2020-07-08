const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('../routes/webhook');

module.exports = function(app) {

  app.use(express.json());
  // app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.json());

  // Apis
  app.use('/', webhook);

}