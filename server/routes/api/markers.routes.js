const express = require('express');
const router = express.Router();

const markersHandler = require('../../logic/handlers/markers.handler');
const requestMiddleware = require('../../logic/middleware/request.middleware');
const filterServiceMiddleware = require('../../logic/middleware/filter.middleware');

router.get('/', (req, res) => {
	res.json({
		routeStructure: {
			'/:country': 'Requires you to append a country to end of route and will return top 30',
		}
	});
});

router.get('/:country', [markersHandler, requestMiddleware, filterServiceMiddleware], async (req, res) => {
	await res.json(res.locals.result);
});

module.exports = router;

