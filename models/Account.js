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
	bank: {
		type: Types.Text,
		required: true,
		initial: true,
	},
	accountNo: {
		type: Types.Number,
		required: true,
		initial: true,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
});

Account.defaultColumns = 'author, bank, accountNo';
Account.register();
