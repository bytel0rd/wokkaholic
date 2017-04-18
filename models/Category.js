var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
	tracK: true,
});

Category.add({
	name: {
		type: String,
	},
	children: {
		type: Types.TextArray,
	},
});

Category.defaultColumns = 'name';
Category.register();
