const SimplePayApiKey = process.env.SIMPLE_PAY_API_KEY;
const request = require('request-promise');
const chargeUrl = 'https://api.simplepay.ng/v1/payments/charge';
const verifyUrl = 'https://api.simplepay.ng/v1/payments/verify';

function payment(app) {

}
module.exports = payment;

// make payment
// confirm payment


function makePayment(req, res, body) {
	request({
		uri: chargeUrl,
		body,
		method: 'POST',
		json: true,
	})
	.then((rpRes) => {
		console.log(rpRes);
	})
	.catch((rpRes) => {
		console.log(rpRes);
		res.json(rpRes);
	});
}

function verifyPayment (req, res, body) {
	request({
		uri: verifyUrl,
		body,
		method: 'POST',
		json: true,
	})
	.then((rpRes) => {
		console.log(rpRes);
		res.json(rpRes);
	})
	.catch((rpRes) => {
		console.log(rpRes);
		res.json(rpRes);
	});
}
