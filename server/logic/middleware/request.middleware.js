const requestService = require('../services/request.service');

module.exports = async function request(req, res, next) {
	const url = `${process.env.LISTING_ENDPOINT}${req.locals.endpoint}`;
	let error = null;

	const response = await requestService.get(url)
		.catch((err) => {
			console.error('Error in listings request: ', err);
			error = err;
			next(err);
		});

	if (!error) {
		res.locals.data = response.data.data;
		next();
	}
};