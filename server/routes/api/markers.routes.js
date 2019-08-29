const express = require('express');
const router = express.Router();

const markersHandler = require('../../logic/handlers/markers.handler');
const requestMiddleware = require('../../logic/middleware/request.middleware');
const markersFilterServiceMiddleware = require('../../logic/middleware/markers-filter.middleware');

router.get('/', (req, res) => {
	res.json({
		routeStructure: {
			'/:country': 'Requires you to append a country to end of route and will return top 30',
		}
	});
});

router.get('/:country', [markersHandler, requestMiddleware, markersFilterServiceMiddleware], (req, res) => {
	if (!res.locals.result) {
		res.locals.result = {
			message: 'No Results Found for Marker.'
		}
	}

	res.json({
		result: res.locals.result
	});
});

module.exports = router;

