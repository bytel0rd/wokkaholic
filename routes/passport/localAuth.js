var LocalStrategy = require('passport-local').Strategy;
var keystone = require('keystone');
var ApiKey = keystone.list('Apikey').model;

var mailer = require('./../mailer');
var siteName = process.env.SITE_NAME || 'wokkaholic';

// the function is exported and @{passport, usersmodel} is passed
// has a parameter when imported
// into the autitication route;
module.exports = function localAuth (passport, Users) {
	// serializeuser by holding ID for identifing specific user
	// sends  back a key  to decrypt the user
	// function serializingCallback(user, done) {
	// }
	passport.serializeUser((user, done) => {
		// console.log('serializing' + user._id);
		done(null, user._id);
	});

	// deserializeuser by using the serialize Key
	//  for decrytpting the user data
	passport.deserializeUser((_id, done) => {
		// console.log('deserializing' + _id);
		done(null, Users.findById(_id, (err, user) => {
			if (err) {
				// console.log('there is an error');
				return err;
			}
			return user;
		}));
	});


	// a 'SignIn' strategy has been created to autheticated Users
	// the function makes use of  two parameters @{email} @{password}
	// and sends a err response if it failed or user if succesfull.
	passport.use('login', new LocalStrategy({
		passReqToCallback: true,
		usernameField: 'email',
		passwordField: 'password',
	},
		(req, email, password, done) => {
			// TODO: user NOT FOUND TODO: INVALID password TODO: AUTHENTICATE user
			Users.findOne({
				email,
			}, (err, user) => {
				if (err) {
					// console.log(err);
					return done(null, false, {
						message: 'user not found',
					});
				}
				if (user === null || user === {}) {
					return done(null, false, {
						message: 'emailAddress not found',
					});
				}

				user._.password.compare(password, (err, ismatch) => {
					console.log(ismatch);
					if (!err && ismatch) return done(null, user);
					return done(null, false, {
						mgs: `invalid password`,
					});
				});
			});
		}));


	// a 'signUp' strategy has been created to autheticated Users
	// the function makes use of  mutiple parameters @{emaiil} @{password} @{userProfile Object}
	// and sends a err response if it failed or user if succesfull.
	// passReqToCallback: allows us to pass back the entire request to the callback

	passport.use('signUp', new LocalStrategy({
		passReqToCallback: true,
		usernameField: 'email',
		passwordField: 'password',
	},
		(req, email, password, done) => {
			// find a user in mongo with provided emailAddress
			Users.findOne({
				email,
			}, (err, user) => {
				// In case of any error, return using the done method
				if (err) {
					return done(err);
				}
				// already exists
				if (user) {
					return done(new Error(`${req.body.email} already exists`));
				}
				// if there is no user, create the user
				// to  understand the user validation process
				// <a href='./userSchema.html'>userSchema</a>
				const newuser = new Users(req.body);
				var author = newuser._id;

				// confirms valid ApiKey by sending a valid Email
				var data = {
					to: req.body.email,
					subject: `${siteName} : User Registration @t ${Date()}`,
					text: `succesfull email validation for
					${newuser.fullName}  of id: ${newuser._id}
					thank you for using our platform`,
				};

				mailer(data)
					.then((d) => {
						var newApiKey = new ApiKey({ author });
						newApiKey.save((err) => {
							if (err) return done(err);
						});
						// save the user
						newuser.save((saveErr) => {
							if (saveErr) {
								return done(saveErr);
							}
							return done(null, newuser);
						});
					})
					.catch((e) => {
						done(new Error(`error validating email ${req.body.email}`));
					});
			});
		}));
};
