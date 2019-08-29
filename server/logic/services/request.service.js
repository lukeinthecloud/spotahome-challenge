const axios = require('axios');

// NOTE: abstracted axios get in case we want to swap to a different type of HTTP request library
function get(url) {
	return axios.get(url);
}

module.exports = {
	get
};
