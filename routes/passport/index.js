var express = require('express');
const _ = require('lodash');

var jwtSigner = require('./jwt').signJWT;

function passportAuths (keystone, app, passport, config) {

	var User = keystone.list('User').model;
	var ApiKey = keystone.list('Apikey').model;

	if (!config) config = {};
	var mountPath = config.root || '/auth';

	require('./apiKey')(keystone, passport);
	// require('./facebook')(passport, User);
	require('./jwt.js').default(passport, User);
	require('./localAuth')(passport, User);

	// setting up mounts and request for various type of auth logins
	var router = express.Router();
	// responsible for sending user deatils and other auth details
	var subRouter = express.Router();

	router.use('/:method', function (req, res, next) {

		var authMethod = req.params.method.toLowerCase();
		var requiredUser = req.query.user === '1';

		console.log(`${req.method}     ${authMethod}`);

		// responsible for default routing of the user
			switch (req.method) {
				case 'GET':
					return getRequest(req, res, next);
				case 'POST':
					return postRequest(req, res, next);
				default:
					return handleErr(req, res, next);
			}

		// hanles and error from any type of request
		function handleErr (req, res, next) {
			res.status(405).json({
				err: `${req.method} is not allowed for ${authMethod}`,
			});
		}

		// setups auth type for any get request checks if user details
		// is required from the query and sends it back
		function getRequest(req, res, next) {
			switch (authMethod) {
				case 'apikey':
					const localAKP = passport.authenticate('localapikey', {
						session: false,
					});
					if (requiredUser) return subRouter.use(localAKP, getUserVer)(req, res, next);
					return localAKP(req, res, next);
				case 'jwt':
					const jwtP = passport.authenticate('jwt', {
						session: false,
					});
					if (requiredUser) return subRouter.use(jwtP, getUserVer)(req, res, next);
					return jwtP(req, res, next);
				case 'facebook':
					const fbP = passport.authenticate('facebook');
					if (requiredUser) return subRouter.use(fbP, getUserVer)(req, res, next);
					return fbP(req, res, next);
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
					if (requiredUser) {
						return subRouter.use(passport.authenticate('login'), getUserVer)(req, res, next);
					}
					return passport.authenticate('login', {
						sucessRedirect: `/${mountPath}/dashboard`
					})(req, res, next);
				case 'signup':
					if (requiredUser) {
						return subRouter.use(passport.authenticate('signUp'), getUserVer)(req, res, next);
					}
					return passport.authenticate('signUp')(req, res, next);
				default:
					return handleErr(req, res, next);
			}
		}

		function getUserVer(req, res, next) {
			if (authMethod === 'dashboard') return res.status(200).json(req.user);
			return succesfullAuth(req, res);
		}

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
	});

	app.use(mountPath, router);
}

module.exports = passportAuths;
