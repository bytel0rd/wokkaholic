var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Inbox Model
 * ==========
 */
var Giger = new keystone.List('Giger', {
	tracK: true,
});

Giger.add({
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
	accepted: Types.Boolean,
		gigAuthor: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
	gig: {
		type: Types.Relationship,
		ref: 'Gig',
		required: true,
		initial: true,
	},
		expDate: {
		type: Types.Text,
		required: true,
		initial: true,
	},
});

Giger.defaultColumns = 'author, gigAuthor, gig, price, expDate';
Giger.register();
