const account_config = require('./account');
const bid_config = require('./bid');
const category_config = require('./category');
const enquiry_config = require('./enquiry');
const offer_req_config = require('./offer');
const user_config = require('./user');
const view_config = require('./view');
const inbox_config = require('./inbox');
const gig_config = require('./gig');
const giger_config = require('./giger');


/**
 * @apiDefine ListQueryScheme
 *
 * @apiParam (query) {number} [skip] amount of items to skip for the query
 * @apiParam (query) {number} [limit] amount of items to return
 * @apiParam (query) {number} [page] to off pagination
 * @apiParam (query) {string} [field] fields to be return
 * @apiParam (query) {string} [sortBy] field used for sorting
 */


module.exports = {
	root: '/api/v1',
	models: {
		Account: account_config,
		Bid: bid_config,
		Category: category_config,
		Enquiry: enquiry_config,
		OfferRequest: offer_req_config,
		User: user_config,
		View: view_config,
		Inbox: inbox_config,
		Gig: gig_config,
		Giger: giger_config,
	},
};
