const express = require('express');
const router = express.Router();

const requestService = require('../../logic/services/request.service');

router.get('/', (req, res) => {
	res.json({
		routeStructure: {
			'/:country': 'Requires you to append a country to end of route and will return top 30',
		}
	});
});

router.get('/:country?&max=30', [requestService], async (req, res) => {
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

module.exports = router;

