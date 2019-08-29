const express = require('express');
const router = express.Router();

const homeCardsHandler = require('../../logic/handlers/homecards.handler');
const requestMiddleware = require('../../logic/middleware/request.middleware');

router.post('/', [homeCardsHandler, requestMiddleware], (req, res) => {
	res.json({
		routeStructure: {
			'/:id': 'Requires you to send a specific id for a room and will return relevant data to that room'
		}
	});
});

module.exports = router;

