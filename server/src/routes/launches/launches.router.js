
// routes/launches/launches.router.js
const express = require('express');
const { httpGetAllLaunches } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;
