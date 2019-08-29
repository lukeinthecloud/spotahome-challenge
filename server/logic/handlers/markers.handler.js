module.exports = function markersHandler(req, res, next) {
	req.locals = {
		endpoint: `/markers/${req.params.country}`,
		limit: req.query.limit ? req.query.limit : false
	};

	next();
};

