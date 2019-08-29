const express = require('express');
const router = express.Router();

const listingsRequestMiddleware = require('../../logic/services/request.service');

router.get('/', (req, res) => {
	res.json({
		routeStructure: {
			'/:id': 'Requires you to send a specific id for a room and will return relevant data to that room'
		}
	});
});

router.get('/:country', [listingsRequestMiddleware], async (req, res) => {
	// const response = await User.find()
	// 	.catch((err) => {
	// 		console.error('Error unable to retrieve homecards: ', err);
	// 		res
	// 			.status(500)
	// 			.json({
	// 				path: '/homecards',
	// 				message: 'Error in request'
	// 			});
	// 	});

	await res.json({});
});

router.post('/:id', async (req, res) => {

});

module.exports = router;

