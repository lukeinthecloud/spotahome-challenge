module.exports = function markersHandler(req, res, next) {
	req.locals = {
		endpoint: '/homecards_ids'
	};

	next();
};