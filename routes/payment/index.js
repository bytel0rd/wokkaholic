const express = require('express');
const prokess = require('./prokess');
const middleware = require('./../middleware');

module.exports = function payment (app, mountPath) {
	const router = express.Router();
	router.use(middleware.authorizeRoute);

	// pay with master card and charge
	router.post('/charge', (req, res) => {
		var b = req.body;
		prokess.addCoins(req.user._id, req.user.email, b.amount, b.number, b.cvv,
			b.expiry_month, b.expiry_year)
			.then(d => res.status(200).json(d))
			.catch(e => res.status(406).json(e));
	});

	// transferTo
	router.post('/payment', (req, res) => {
		var b = req.body;
		var reason = `transaction ${b.item} for  ${b.type} `;
		prokess.payTo(req.user._id, b.toId, b.amount, reason)
		.then(d => res.status(200).json(d))
		.catch(e => res.status(406).json(e));
	});

	// confirm otp
	// router.Post('', (req, res) => {
	//
	// });
	app.use(mountPath, router);
};
