var co = require('co');
var keystone = require('keystone');
var account = keystone.list('Account').model;
var paystack = require('./paystack');

module.exports = function accountList (req, res, next) {
	// creating secure controlled body update
	var body = {
		bank: req.body.bank,
		acctNo: req.body.acctNo,
		author: req.user._id,
		bankName: req.body.bankName,
	};

	// allowing flow controls based on methods
	switch (req.method) {
		case 'GET':
			return getAccount();
		case 'PATCH':
			return updateAccount();
		case 'POST':
			return createAccount();
		default:
			return res.status(404).json({ mgs: 'method not allowed' });
	}

	/**
	 * [getAccount description]
	 * @return {[function]} [description]
	 */
	function getAccount () {
		var query = account.findOne({
			author: req.user._id,
		});
		return formatGetResponse(req, res, next, query);
	}

	/**
	 * [updateAccount description]
	 * @return {[null]} [description]
	 */
	function updateAccount () {
		return co.wrap(function * () {
			try {
				var acct = yield account.findOne({
					author: req.user._id,
				}).populate('author');

				updatePaystack(req.user);
				body.wallet = acct.wallet;
				body.subAcct = acct.subAcct;
				return yield account.findOneAndUpdate({ author: req.user._id }, body);
			} catch (e) {
				return Promise.reject(e);
			}
		})().then(data => formatBodyResponse(req, res, next, undefined, data, 200))
		.catch((err) => formatBodyResponse(req, res, next, err));
	}

	/**
	 * [createAccount description] used in creating accounts
	 * @return {[null]} [description]
	 */
	function createAccount () {
		co.wrap(function * () {
			body.wallet = 0;
			var paySk = yield updatePaystack(req.user);
			body.subAcct = paySk.data.subaccount_code;
			var newAccount = new account(body);
			newAccount.save(err => {
				if (err) return Promise.reject(err);
				return Promise.resolve(newAccount);
			});
		})().then(d => formatBodyResponse(req, res, next, undefined, d, 201))
			.catch(e => formatBodyResponse(req, res, next, e));
	}

	// mapped and creates sub account for the user
	function updatePaystack (u) {
		var business = `${u.fullName.first} ${u.fullName.last}`;
		var bank = body.bank;
		var acctNo = body.acctNo;
		var perCharge = 0.5;
		return paystack.createSubAcct(business, bank, acctNo, perCharge, u);
	}
};

// sends the new and updated data to the middleware
function formatBodyResponse (req, res, next, err, data, successCode, failCode) {
	if (err) res.status(failCode || 409).json(err);
	res.local = {};
	res.local.status = successCode || 201;
	res.local.body = data;
	next();
}

// executes the query for both list and retrieves and send it to the next middleware
function formatGetResponse (req, res, next, query, successCode, failCode = 406) {
	query
		.then((data) => {
			res.local = {};
			res.local.status = successCode || 200;
			res.local.body = data;
			return next();
		})
		.catch((err) => {
			res.status(failCode).json(err);
		});
}
