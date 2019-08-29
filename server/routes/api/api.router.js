const express = require('express');

const markerRouter = require('./markers.routes');
const homecardRouter = require('./home-cards.routes');

const markersHandler = require('../../logic/handlers/markers.handler');

const router = express.Router();

router.use('/markers', [markersHandler], markerRouter);

router.use('/homecards', homecardRouter);

module.exports = router;