var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gig = new keystone.List('Gig', {
	tracK: true,
});

Gig.add({
	detail: {
		type: Types.Textarea,
		required: true,
		initial: true,
	},
	faq: {
		type: Types.Textarea,
	},
	requirement: {
		type: Types.Textarea,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
	price: {
		type: Types.Number,
		required: true,
		initial: true,
	},
	deliveryDate: {
		type: Types.Textarea,
		// required: true,
		// initial: true,
	},
	// attachment: {
	// 	type: Types.LocalFile,
	// 	dest: 'data/files/attachment',
	// 	prefix: 'attachments',
	// 	filename: function (item, file) {
	// 		return item.id + '.' + file.extension;
	// 	},
	// },
	title: {
		type: Types.Text,
		required: true,
		initial: true,
	},
	category: {
		type: Types.Text,
	},
	subcategory: {
		type: Types.Text,
	},
});

Gig.defaultColumns = 'author, title, detail, price, deliveryDate';
Gig.register();
