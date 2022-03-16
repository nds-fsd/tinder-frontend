import {getUserToken} from "./auth";

export const API_URL =  window.location.hostname === 'know.netlify.app' ? "https://nucliotinder.herokuapp.com/api" : "http://localhost:5002/api";
// Custom API error to throw
function ApiError(message, data, status) {
    let response = null;
    let isObject = false;

    // We are trying to parse response
    try {
        response = JSON.parse(data);
        isObject = true;
    } catch (e) {
        response = data;
    }

    this.response = response;
    this.message = message;
    this.status = status;
    this.toString = function () {
        return `${ this.message }\nResponse:\n${ isObject ? JSON.stringify(this.response, null, 2) : this.response }`;
    };
}

// API wrapper function
const fetchResource = (method = "GET", path, userOptions = {}) => {
    // Define default options
    const defaultOptions = {
        mode: 'cors',
        method,
    };
    // Define default headers
    const defaultHeaders = {
        "content-type": 'application/json',
        "authorization": `Bearer ${getUserToken()}`
    };

    const options = {
        // Merge options
        ...defaultOptions,
        ...userOptions,
        // Merge headers
        headers: {
            ...defaultHeaders,
            ...userOptions.headers,
        },
    };

    // Build Url
    const url = `${ API_URL }/${ path }`;

    // Detect is we are uploading a file
    const isFile = options.body instanceof File;

    // Stringify JSON data
    // If body is not a file
    if (options.body && typeof options.body === 'object' && !isFile) {
        options.body = JSON.stringify(options.body);
    }

    // Variable which will be used for storing response
    let response = null;

    return fetch(url, options)
        .then(responseObject => {
            // Saving response for later use in lower scopes
            response = responseObject;

            // HTTP unauthorized
            if (response.status === 401) {
                // Handle unauthorized requests
                // Maybe redirect to login page?
                return {authError: true}
            }

            // Get response as json
            return response.json();
        })
        // "parsedResponse" will be either text or javascript object depending if
        // "response.text()" or "response.json()" got called in the upper scope
        .then(parsedResponse => {
            // Check for HTTP error codes
            if (response.status < 200 || response.status >= 300) {
                // Throw error
                throw parsedResponse;
            }

            // Request succeeded
            return parsedResponse;
        })
        .catch(error => {
            // Throw custom API error
            // If response exists it means HTTP error occurred
            if (response) {
                throw new ApiError(`Request failed with status ${ response.status }.`, error, response.status);
            } else {
                throw new ApiError(error.toString(), null, 'REQUEST_FAILED');
            }
        });
};

export default fetchResource;