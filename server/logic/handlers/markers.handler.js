module.exports = function markersHandler(req, res, next) {
	req.locals = {
		endpoint: '/markers'
	};
	next();
};