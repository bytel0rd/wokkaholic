var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	tracK: true,
});

User.add({
	fullName: {
		type: Types.Name,
		required: true,
		initial: true,
		index: true,
	},
	email: {
		type: Types.Email,
		initial: true,
		required: true,
		unique: true,
		index: true,
	},
	password: {
		type: Types.Password,
		initial: true,
		required: true,
	},
	gender: {
		type: Types.Select,
		required: true,
		options: ['male', 'female'],
		initial: true,
	},
	dob: {
		type: Types.Date,
		// required: true,s
		initial: true,
	},
	aboutMe: {
		type: Types.Textarea,
		default: 'a new awesome wokkaholic who enjoys good and creative work',
	},
	skills: {
		type: Types.TextArray,
	},
	// image: {},
	title: {
		type: Types.Text,
		default: 'a great wokkaholic',
	},
	phoneNo: {
		type: Types.Number,
		required: true,
		initial: true,
	},
}, 'Permissions', {
	isAdmin: {
		type: Boolean,
		label: 'Can access Keystone',
		index: true,
		default: false,
	},
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();