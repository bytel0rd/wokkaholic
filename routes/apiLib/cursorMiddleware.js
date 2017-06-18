var _ = require('lodash');
function cursorMiddlewares (keystone, listName, config) {
	var List = keystone.list(listName).model;
	var list = keystone.list(listName);
	var listConfig = config.models[listName];

	var resource = listConfig.resources;

	return {
		// searches and returns a paginated list which matches the condition
		list: function (req, res, next) {
			var query;

			var dynamicFields = ['field', 'page', 'sortBy', 'token', 'apikey',
				'skip', 'limit'];
			var dynamicDBQuery = dbDynamicQuery(req.query, dynamicFields);

			if (req.query.page) var page = parseInt(req.query.page);
			if (req.query.skip) var skip = parseInt(req.query.skip);
			if (req.query.limit) var limit = parseInt(req.query.limit);
			if (req.query.sortBy) var sortBy = req.query.sortBy;

			// var cMgs = 'missing';
			// console.log(`dbQ: ${dynamicDBQuery}
			// 	page: ${page || cMgs}
			// 	skip:${skip || cMgs}
			// 	limit: ${limit || cMgs}
			// 	sortBy: ${sortBy || cMgs}
			// 	query: ${req.query}`);

			if (req.query.page === '0') {
				query = list.model.find(dynamicDBQuery) // req.query.dbQuery
					.limit(limit || 15)
					.skip(skip || 0);
			} else {
				query = list.paginate({
					page: page || 1,
					perPage: 10,
					maxPages: 10,
				}).find(dynamicDBQuery);
			}

			query = remapPopulationQuery(req, 'list', query);
			query.sort(sortBy);
			query = new Promise(function (resolve, reject) {
				query. exec((err, data) => {
					resolve(data);
					reject(err);
				});
			});
			formatGetResponse(req, res, next, query, 200, 406);

				// make the remaining query dynamic for the db to query
			function dbDynamicQuery (query, skipKeys) {
				return _.omit(query, skipKeys);
			}
		},
		// finds the one with the id and returns it
		retrieve: function (req, res, next) {
			var query = List.findOne({
				_id: req.params.id,
			});
			query = remapPopulationQuery(req, 'retrieve', query);
			formatGetResponse(req, res, next, query, 200, 406);
		},
		// creates and save the new model from request body
		create: function (req, res, next) {
			var list = new List(req.body);
			list.save((err) => {
				formatBodyResponse(req, res, next, err, list, 201, 406);
			});
		},
		// updates and save the new model from request body
		update: function (req, res, next) {
			// console.log(req.body)
			List.findOneAndUpdate({
				_id: req.params.id,
				author: req.user._id,
			}, req.body, { upsert: true, new: true }, (err, list) => {
				console.log(err, list);
				formatBodyResponse(req, res, next, err, list, 201, 406);
			});
		},
	};

	// add population to the query defined in the resource config
	function remapPopulationQuery (req, action, query) {
		if (req.query.field) query = query.select(req.query.field);
		var populate = resource[action].populate;
		if (populate) {
			populate.forEach(function (elem) {
				query = query.populate(elem.path);
				if (elem.selectField) query = query.populate(elem.path, elem.selectField);
			});
		};
		return query;
	}

	// executes the query for both list and retrieves and send it to the next middleware
	function formatGetResponse (req, res, next, query, successCode, failCode = 406) {
		query
			.then((data) => {
				res.local = {};
				res.local.status = successCode || 200;
				res.local.body = data;
				return next();
			})
			.catch((err) => {
				console.log(err);
				res.status(failCode).json(err);
			});
	}

	// sends the new and updated data to the middleware
	function formatBodyResponse (req, res, next, err, data, successCode, failCode) {
		if (err) return res.status(failCode || 409).json(err);
		res.local = {};
		res.local.status = successCode || 201;
		res.local.body = data;
		next();
	}
}

module.exports = cursorMiddlewares;
