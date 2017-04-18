/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');
var passport = require('passport');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Gallery', key: 'gallery', href: '/gallery' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

/** authorized user base on the authentication method choosed */
exports.authorizeRoute = function (req, res, next) {
	//  if user already logins in allows request
	if (req.user) return next();

	// checks for apikey
	const apikey = 'apikey';
	if (req.get(apikey) || req.query[apikey] || req.body[apikey]) {
		return passport.authenticate('localapikey', { session: false })(req, res, next);
	}

	var headerToken = 'JWT_TOKEN';
	var token = 'token';
	if (req.get(headerToken) || req.query[token] || req.body[token]) {
		return passport.authenticate('jwt', { session: false })(req, res, next);
	}
	// finally checks for user token
	res.status(401).json({ mgs: 'unathourized' });
};

// checks the provided array of fields if they exist in the req body
exports.requireFields = function (fields) {
	function checkValid (value) {
		return value !== undefined && value !== null && value !== '';
	}
	return function (req, res, next) {
		var empty;
		var hasAllValidFields = fields.every((field) => {
			var bodyField = req.body[field];
			var isValidField = checkValid(bodyField);
			if (isValidField === false) empty = field;
			return isValidField;
		});

		if (hasAllValidFields === true) return next();
		res.status(406).json({ mgs: `${empty} field is required` });
	};
};
