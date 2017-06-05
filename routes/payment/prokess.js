const paystack = require('./paystack');
const co = require('co');
const Account = require('keystone').list('Account').model;

exports.myCoins = function (author) {
	return Account.findOne({ author }).populate('author');
};

exports.payTo = function (fromId, toId, amount, reason) {
	// SUDO CODE
	// FROM ACCOUNT OWNWER
	// TO ACCOUNT OWNWER
	// COMPLETE transaction
	// SUBTRACT AMOUNT FROM TO
	// ADD AMOUNT TO TO ACCOUNT
	// SEND response
	return co.wrap(function * (fromId, toId, amount, reason) {
		try {
			let acctFrom = yield Account.findOne({
				author: fromId,
			}).populate('author');

			let acctTo = yield Account.findOne({
				author: toId,
			}).populate('author');

			if (!acctTo) throw new Error({ mgs: 'inavlid account for recipient' });
			acctFrom.wallet = parseInt(acctFrom.wallet) - parseInt(amount);
			if (acctFrom.wallet < 1) {
				throw new Error(`insufficent amount for transaction`);
			}
			if (!acctTo.bank || !acctTo.acctNo || !acctTo.subAcct) {
				throw new Error(`insufficent account details for transaction`);
			}

			const transaction = yield paystack.transferTo(!acctTo.subAcct, amount, reason);

			acctFrom = yield Account.findOneAndUpdate({ author: fromId }, acctFrom);
			acctTo.wallet = parseInt(acctTo.wallet) + parseInt(amount);
			acctTo = yield Account.findOneAndUpdate({ author: toId }, acctTo);

			return Promise.resolve({
				status: 'success',
				transaction,
				acct: acctFrom,
			});
		} catch (e) {
			return Promise.reject(e);
		}
	})(fromId, toId, amount, reason);
};

exports.addCoins = function (author, email, amount, number, cvv,
	expiry_month, expiry_year) {
	return co.wrap(function * (author, email, amount, number, cvv,
		expiry_month, expiry_year) {
		try {
			// SUDO CODE
			// find the user acctNo
			// paytransacton
			// update transaction
			// send a response of sucess:

			let acct = yield Account.findOne({ author }).populate('author');
			var mgs = 'invalid account details for transaction';
			if (!acct) throw new Error({ mgs });
			let transcation = yield paystack.charge(email, amount, number, cvv,
				expiry_month, expiry_year, acct.author);

				// bind amount to transaction
			acct.wallet = parseInt(acct.wallet) + parseInt(amount);
			acct = yield Account.findOneAndUpdate({ author }, acct, {
				upsert: true, new: true });

			const data = {
				status: 'success',
				updatedAcct: acct,
				transcation,
			};
			return Promise.resolve(data);
		} catch (e) {
			return Promise.reject(e);
		}
	})(author, email, amount, number, cvv,
		expiry_month, expiry_year);
};
