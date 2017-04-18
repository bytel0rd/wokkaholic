var express = require('express');

function passportAuths(keystone, app, passport, config) {
	var User = keystone.list('User').model;
	if (!config) config = {};
	var mountPath = config.root || '/auth';

	require('./apiKey')(keystone, passport);
	// require('./facebook')(passport, User);
	require('./jwt.js').default(passport, User);
	require('./localAuth')(passport, User);

	// setting up mounts and request for various type of auth logins
	var router = express.Router();

	router.use('/:method', function(req, res, next) {

		var authMethod = req.params.method.toLowerCase();

		console.log(`${req.method}     ${authMethod}`)

		switch (req.method) {
			case 'GET':
				return getRequest(req, res, next);
			case 'POST':
				return postRequest(req, res, next);
			default:
				return handleErr(req, res, next);
		}

		// hanles and error from any type of request
		function handleErr(req, res, next) {
			res.status(405).json({
				err: `${req.method} is not allowed for ${authMethod}`,
			});
		}

		// setups auth type for any get request
		function getRequest(req, res, next) {
			switch (authMethod) {
				case 'apikey':
					return passport.authenticate('localapikey', {
						session: false,
					})(req, res, next);
				case 'jwt':
					return passport.authenticate('jwt', {
						session: false,
					})(req, res, next);
				case 'facebook':
					return passport.authenticate('facebook')(req, res, next);
				case 'dashboard':
					if (!req.user) return res.status(401).json({
						mgs: 'please login first',
					});
					res.status(200).json(req.user);
				default:
					return handleErr(req, res, next);
			}
		}

		// setup auths for any post request
		function postRequest(req, res, next) {
			switch (authMethod) {
				case 'login':
					return passport.authenticate('login', {sucessRedirect: `/${mountPath}/dashboard`})(req, res, next);
				case 'signup':
					return passport.authenticate('signUp')(req, res, next);
				default:
					return handleErr(req, res, next);
			}
		}
	});

	app.use(mountPath, router);
}

module.exports = passportAuths;
