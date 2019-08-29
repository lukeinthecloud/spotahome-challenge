const express = require('express');
const router = express.Router();

const homeCardsHandler = require('../../logic/handlers/homecards.handler');
const requestMiddleware = require('../../logic/middleware/request.middleware');

router.post('/', [homeCardsHandler, requestMiddleware], (req, res) => {
	if (res.locals.data) {
		res.locals.result = res.locals.data.homecards
	} else {
		res.locals.result = {
			message: 'No Results Found for Homecards.'
		}
	}

	res.json({
		result: res.locals.result
	});
});

module.exports = router;

