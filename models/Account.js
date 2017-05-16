var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Inbox Model
 * ==========
 */
var Account = new keystone.List('Account', {
	tracK: true,
});

Account.add({
	wallet: {
		type: Types.Number,
		required: true,
		initial: true,
		default: 0,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
});

Account.defaultColumns = 'author, wallet';
Account.register();
