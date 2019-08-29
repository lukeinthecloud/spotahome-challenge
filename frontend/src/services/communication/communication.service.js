import axios from 'axios';

let axiosInstance = null;

function initializeCommunicationInstance() {
	const baseUrl = process.env.REACT_APP_BASE_URL;
	if (!axiosInstance) {
		axiosInstance = axios.create({
			baseURL: baseUrl,
			timeout: 2000
		});
	}
}

async function get({url, queryParams}) {
	const endpoint = _generateEndpoint(url, queryParams);
	const response = await axiosInstance.get(endpoint);

	return response.data;
}

async function post({url, queryParams, data}) {
	const endpoint = _generateEndpoint(url, queryParams);
	const response = await axiosInstance.post(endpoint, {
		...data
	});

	return response.data;
}

function _generateEndpoint(url, queryParams) {
	let endpoint = url;
	if (queryParams) {
		Object.keys(queryParams).forEach((item, index) => {
			if (index === 0) {
				endpoint += `?${item}=${queryParams[item]}`
			} else {
				endpoint += `&${item}=${queryParams[item]}`
			}
		});
	}

	return endpoint;
}

export {
	initializeCommunicationInstance,
	get,
	post
}