function addIDsToEndpoint(ids) {
	let endpointIDs = '';

	ids.forEach((id, index) => {
		if(index === 0) {
			endpointIDs += `ids[]=${id}`;
		} else {
			endpointIDs += `&ids[]=${id}`
		}
	});

	return endpointIDs;
}


module.exports = function homeCardsHandler(req, res, next) {
	const homeCardIDs = req.body.homecardIDs;
	const endpointIDs =  addIDsToEndpoint(homeCardIDs);

	req.locals = {
		endpoint: `/homecards_ids?${endpointIDs}`
	};

	next();
};