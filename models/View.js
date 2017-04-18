var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Inbox Model
 * ==========
 */
var View = new keystone.List('View', {
	track: true,
});

View.add({
	offer: {
		type: Types.Relationship,
		ref: 'OfferRequest',
		required: true,
		initial: true,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
	category: {
		type: Types.Text,
	},
});


View.defaultColumns = 'author, offer, category';
View.register();
