function _mapOutRoomData(req, roomList) {
	const returnOnlyByID = !!req.query.returnID;

	// Note: this is just open ended to allow for multiple filter types that you could want
	if (returnOnlyByID) {
		const result = roomList.map((item) => {
			return item.id;
		});

		return result;
	} else {
		return roomList;
	}
}


module.exports = function markersFilterServiceMiddleware(req, res, next) {
	const roomList = [];

	// Note: using standard for loop as to not iterate over all items
	for (let i = 0; i < req.locals.limit; i++) {
		const item = res.locals.data[i];
		roomList.push(item);
	}

	const result = _mapOutRoomData(req, roomList);

	res.locals.result = result;
	next();
};