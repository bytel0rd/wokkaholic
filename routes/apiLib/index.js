var express = require('express');
var _ = require('lodash');

var cursorMDW = require('./cursorMiddleware.js');
var defaultMDW = require('./middleware.js');

function apiLib (keystone, app, config) {
	var rootRoute = config.root;
	var models = _.keys(config.models);

	var router = express.Router();

	models.forEach(function (model) {
		var _cursorMDW = cursorMDW(keystone, model, config);
		var _route = config.models[model].alias || model;
		var resources = _.keys(config.models[model].resources);
		console.log(_route, resources);

		resources.forEach(function (resource) {
			var _customMDW = config.models[model].resources[resource].middleware;
			var _defaultMDW = defaultMDW.remapQuery;

			if (!_customMDW) _customMDW = {};
			if (resource === 'create' || resource === 'update') _defaultMDW = defaultMDW.setAuthor;
			_customMDW.before = checkMDW(_customMDW.before);
			_customMDW.after = checkMDW(_customMDW.after);
			var _middleware = _.concat(_customMDW.before, _defaultMDW,
				config.models[model].resources[resource].customCursor || _cursorMDW[resource],
				_customMDW.after, defaultMDW.finalResponse);

			switch (resource) {
				case 'create':
					router.post(`/${_route}`, _middleware);
					break;
				case 'update':
					router.patch(`/${_route}/:id`, _middleware);
					break;
				case 'list':
					router.get(`/${_route}`, _middleware);
					break;
				case 'retrieve':
					router.get(`/${_route}/:id`, _middleware);
					break;
				default:

			}
		});
	});

	app.use(rootRoute, router);
}

module.exports = apiLib;

function checkMDW (middleware) {
	if (_.isArray(middleware) || _.isFunction(middleware)) return middleware;
	return [];
}
