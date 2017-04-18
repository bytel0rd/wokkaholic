var _ = require('lodash');

/**
 * this function remaps the default user query to dynamic db query
 */
exports.remapQuery = function remapQuery (req, res, next) {
	var query = req.query;
	var remappedQuery = {};

	// getting static qury params
	remappedQuery = checkvalid(query, remappedQuery, 'field');
	remappedQuery = checkvalid(query, remappedQuery, 'page');
	remappedQuery = checkvalid(query, remappedQuery, 'sortBy');

	// getting dynamic query params
	var dynamicDBQuery = dbDynamicQuery(query, ['field', 'page', 'sortBy', 'token', 'apikey']);

	// merging query params and moves to the next middleware
	req.query = _.merge(remappedQuery, { dbQuery: dynamicDBQuery });
	next();

	// checks for any static querying keys and resaginng back to the query
	function checkvalid (query, remappedQuery, parameter) {
		if (query[parameter]) remappedQuery[parameter] = query[parameter];
		return remappedQuery;
	}

	// make the remaining query dynamic for the db to query
	function dbDynamicQuery (query, skipKeys) {
		return _.omit(query, skipKeys);
	}
};

/**
 * sets the form body field Author to the user Id
 */
exports.setAuthor = function (req, res, next) {
	if (req.method === 'GET') return next();
	if (!req.user) return res.status(401).json({ mgs: 'unathorized request made'});
	req.body.author = req.user._id;
	next();
};

/**
 * this just sends the final response
 */
exports.finalResponse = function finalResponse (req, res) {
	res.status(res.local.status).json(res.local.body);
};
