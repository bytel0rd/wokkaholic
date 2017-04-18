var keystone = require('keystone');
var crypto = require('crypto');

var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Apikey = new keystone.List('Apikey', {
	tracK: true,
});

Apikey.add({
	key: {
		type: Types.Text,
		default: genRandKey,
		required: true,
		unique: true,
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		index: true,
		required: true,
		initial: true,
		unique: true,
	},
});

Apikey.defaultColumns = 'author, key';
Apikey.register();

function genRandKey () {
	return crypto.randomBytes(256).toString('base64');
}
