const express = require('express');

const markerRouter = require('./markers.routes');
const homecardRouter = require('./home-cards.routes');

const router = express.Router();

router.use('/markers', markerRouter);

router.use('/homecards', homecardRouter);

module.exports = router;