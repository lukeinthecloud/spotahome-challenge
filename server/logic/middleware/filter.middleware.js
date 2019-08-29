module.exports = function filterServiceMiddleware(req, res, next) {
	const result = [];

	// Note: using standard for loop as to not iterate over all items
	for (let i = 0; i < req.locals.limit; i++) {
		const item = res.locals.data[i];
		result.push(item);
	}

	res.locals.result = result;
	next();
};