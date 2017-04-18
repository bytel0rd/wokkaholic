var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Inbox Model
 * ==========
 */
var Inbox = new keystone.List('Inbox', {
	tracK: true,
});

Inbox.add({
	from: {
		type: Types.Relationship,
		ref: 'User',
		initial: true,
		required: true,
	},
	to: {
		type: Types.Relationship,
		ref: 'User',
		initial: true,
		required: true,
	},
	title: {
		type: Types.Text,
		initial: true,
		required: true,
	},
	body: {
		type: Types.Textarea,
	},
});

Inbox.defaultColumns = 'to, from, title';
Inbox.register();
