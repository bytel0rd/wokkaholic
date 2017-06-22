const middleware = require('./../middleware');
const customCursor = require('./../restCursor');

const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


const list = {
	customCursor: customCursor.inboxList,
	populate: [{
		path: 'to',
	}, {
		path: 'from',
	}],
	middleware: {
		before: [middleware.authorizeRoute],
	},
};

const inbox = {
	resources: {
		create,
		list,
	},
};


module.exports = inbox;
