var keystone = require('keystone');
var Types = keystone.Field.Types;

var OfferRequest = new keystone.List('OfferRequest', {
	tracK: true,
});

OfferRequest.add({
	detail: {
		type: Types.Textarea,
		required: true,
		initial: true,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		required: true,
		initial: true,
	},
	budget: {
		type: Types.Number,
		required: true,
		initial: true,
	},
	expDate: {
		type: Types.Date,
		required: true,
		initial: true,
	},
	acceptedBy: {
		type: Types.Relationship,
		ref: 'User',
	},
	// attachment: {
	// 	type: Types.LocalFile,
	// 	dest: 'data/files/attachment',
	// 	prefix: 'attachments',
	// 	filename: function (item, file) {
	// 		return item.id + '.' + file.extension;
	// 	},
	// },
	category: {
		type: Types.Text,
	},
	subcategory: {
		type: Types.Text,
	},
});

OfferRequest.defaultColumns = 'author, detail, acceptedBy, budget, expDate';
OfferRequest.register();
