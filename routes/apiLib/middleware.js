// var _ = require('lodash');
/**
 * this function remaps the default user query to dynamic db query
 */
exports.remapQuery = function remapQuery (req, res, next) {
	// THIS PIECE OF CODE WORKED ON MY LOCAL MACHINE AND WENT
	// HAYWIRE IN PRODUCTION.

	// creating static duplicates and custom dbQuery holder
	// var query = req.query;
	// var remappedQuery = {};
	// // parsing querys for strict validations for skip, limit and page
	// // checks for any static querying keys and resaginng back to the query
	// try {
	// 	if (req.query.page) remapQuery.page = parseInt(req.query.page);
	// 	if (req.query.skip) remapQuery.skip = parseInt(req.query.skip);
	// 	if (req.query.limit) remapQuery.limit = parseInt(req.query.limit);
	// 	if (req.query.field) remapQuery.field = req.query.field;
	// 	if (req.query.sortBy) remapQuery.sortBy = req.query.sortBy;
	// } catch (e) {
	// 	return res.status(406).json({ mgs: `expected integer value
	// 		 for page, skip and limit` });
	// }

	// var dynamicFields = ['field', 'page', 'sortBy', 'token', 'apikey',
	// 	'skip', 'limit'];

	// // getting dynamic query params
	// var dynamicDBQuery = dbDynamicQuery(query, dynamicFields);

	// // merging query params and moves to the next middleware
	// // req.query = _.merge(remappedQuery, { dbQuery: dynamicDBQuery });
	// remappedQuery.dbQuery = dynamicDBQuery;
	// console.log(remappedQuery);
	// req.query = remappedQuery;
	next();

	// make the remaining query dynamic for the db to query
	// function dbDynamicQuery (query, skipKeys) {
	// 	return _.omit(query, skipKeys);
	// }
};

/**
 * sets the form body field Author to the user Id
 */
exports.setAuthor = function (req, res, next) {
	if (req.method === 'GET') return next();
	if (!req.user) return res.status(401).json({ mgs: 'unathorized request made' });
	req.body.author = req.user._id;
	next();
};

/**
 * this just sends the final response
 */
exports.finalResponse = function finalResponse (req, res) {
	res.status(res.local.status).json(res.local.body);
};
