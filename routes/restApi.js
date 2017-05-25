var middleware = require('./middleware');
var customCursor = require('./restCursor');

module.exports = {
	root: '/api/v1',
	models: {
		Account: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				list: {
					customCursor: customCursor.accountList,
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
			},
		},
		Bid: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				update: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				list: {
					populate: [{
						path: 'author',
						// selectField: 'email',
					}],
				},
				retrieve: {
				},
			},
		},
		Category: {
			resources: {
				list: {},
				retrieve: {
				},
			},
		},
		Enquiry: {
			resources: {
				create: {},
			},
		},
		OfferRequest: {
			alias: 'offer',
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				update: {
					middleware: {
						before: [middleware.authorizeRoute, customCursor.offerReq],
					},
				},
				list: {
					populate: [{
						path: 'author',
					}, {
						path: 'acceptedBy',
					}],
				},
				retrieve: {
					populate: [{
						path: 'author',
					}, {
						path: 'acceptedBy',
					}],
				},
			},
		},
		User: {
			resources: {
				update: {
					middleware: {
						before: [middleware.authorizeRoute, function (req, res, next) {
							req.body.isAdmin = false;
							next();
						}],
					},
				},
				list: {},
				retrieve: {},
			},
		},
		View: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
			},
		},
		Inbox: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				list: {
					customCursor: customCursor.inboxList,
					populate: [{
						path: 'to',
					}, {
						path: 'from',
					}],
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
			},
		},
		Gig: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				update: {
					middleware: {
						before: [middleware.authorizeRoute, customCursor.offerReq],
					},
				},
				list: {
					populate: [{
						path: 'author',
					}, {
						path: 'acceptedBy',
					}],
				},
				retrieve: {
					populate: [{
						path: 'author',
					}, {
						path: 'acceptedBy',
					}],
				},
			},
		},
		Giger: {
			resources: {
				create: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				update: {
					middleware: {
						before: [middleware.authorizeRoute],
					},
				},
				list: {
					populate: [{
						path: 'author',
					}],
				},
				retrieve: {
				},
			},
		},
	},
};
