/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var passport = require('passport');
var _ = require('lodash');

var ApiKey = keystone.list('Apikey').model;
var restApi = require('./apiLib');
var config = require('./restApi');
var jwtSigner = require('./passport/jwt').signJWT;

// console.log(new localApiKey.Strategy())
// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// initialize passport
	app.use(passport.initialize());
	require('./passport')(keystone, app, passport);

	// special routes to login and signup with rest Apis
	app.post('/api/auth/login', passport.authenticate('login'), function (req, res) {
		return succesfullAuth(req, res);
	});
	app.get('/api/auth/dashboard', middleware.authorizeRoute, (req, res) => res.status(200).json(req.user));
	app.post('/api/auth/signup', passport.authenticate('signUp'), function (req, res) {
		return succesfullAuth(req, res);
	});

	// initialize api routes
	restApi(keystone, app, config);
	// Views
	app.get('/', routes.views.index);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};

function succesfullAuth (req, res) {
	var token = jwtSigner(req.user);
	var user = _.omit(req.user, ['password', 'isAdmin']);

	ApiKey.findOne({
		author: req.user._id,
	})
	.then((data) => {
		res.status(200).json({
			token,
			user,
			apiKey: data.key,
		});
	})
	.then((err) => res.status(200).json({
		token,
		user,
	}));
}
