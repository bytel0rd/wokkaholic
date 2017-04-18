var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Inbox Model
 * ==========
 */
var Bid = new keystone.List('Bid', {
	tracK: true,
});

Bid.add({
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
	info: {
		type: Types.Text,
	},
	price: {
		type: Types.Number,
		required: true,
		initial: true,
	},
});

Bid.defaultColumns = 'author, info, price';
Bid.register();
