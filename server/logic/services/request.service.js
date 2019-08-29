const axios = require('axios');

module.exports = async function request(req, res, next) {
	const endpoint = `${req.locals.endpoint}/${req.params.country}`;
	const url = `${process.env.LISTING_ENDPOINT}${endpoint}`;
	let error = null;

	const response = await axios.get(url)
		.catch((err) => {
			console.error('Error in listings request: ', err);
			error = err;
			next(err);
		});

	if (!error) {
		res.locals.data = response.data.data;
	}
};