const middleware = require('./../middleware');

const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};

const view = {
	resources: {
		create,
	},
};

module.exports = view;
