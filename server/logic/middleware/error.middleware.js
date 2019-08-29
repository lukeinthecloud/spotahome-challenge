module.exports = function errorHandler(err, req, res, next) {
	console.error(err);

	res.json({
		message: 'There was a problem completing your request please try again...'
	});
};