const middleware = require('./../middleware');
const accountList = require('./../payment/account');

/**
 * @apiDefine AccountSuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {string} acctNo private user account owned at the bank
 * @apiSuccess {string} bankName bank name that the account belongs to
 * @apiSuccess {string} subAcct unique id to mapp payments to
 * @apiSuccess {string} bank short bank code
 * @apiSuccess {string} author my unique id | my details
 */

/**
 *  @apiDefine AccountWriteParams
 *
 * @apiParam {string} bankName bank name that the account belongs to
 * @apiParam {string} acctNo private user account owned at the bank
 */

/**
 *	 @apiDefine AccountSuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 201 created
 * 	{
 * 	"_id": "57f8c68481cc811dc8c42988",
 * 		"acctNo": "12345678901",
 * 		"bankName": "Second Trust Bank",
 * 		"subAcct": "r_teyris",
 * 		"bank": "035",
 * 		"author": "57f8c68481cc811dc8c42923"
 * 	}
 */

/**
 *  @apiDefine AccountFailureWriteRespone
 *
 * @apiError accountFail  failure during validation
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 406 unacceptable
 * 	{
 * 	mgs: "validation error message object"
 * 	}
 *
 */

/**
 * @apiDefine AccountWriteParamExample
 *
 * @apiParamExample {json} Account-Write-Json-Example:
 * 	{
 * 		"acctNo": "12345678901",
 * 		"bankName": "Second Trust Bank",
 * 	}
 */


/**
 * @api {POST} /api/v1/account create account details
 * @apiName CreateAccount
 * @apiGroup Account
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for creating user accounts from their bank accounts
 * number which is used for payments and returns the
 * new bank details
 *
 * @apiUse AccountWriteParams
 *
 * @apiUse AccountWriteParamExample
 *
 * @apiUse AccountSuccessRespone
 *
 * @apiuse AccountSuccessExample
 *
 * @apiUse AccountFailureWriteRespone
 */
const create = {
	customCursor: accountList,
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {PATCH} /api/v1/account/:id update account details
 * @apiName CreateAccount
 * @apiGroup Account
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} unique account identifer
 *
 * @apiDescription this endpoint is responsible
 * for updating an exiting user accounts from
 * their bank accounts number which is used for
 * payments and returns the newly updated bank details
 *
 *
 * @apiUse AccountWriteParams
 *
 * @apiUse AccountWriteParamExample
 *
 * @apiUse AccountSuccessRespone
 *
 * @apiuse AccountSuccessExample
 *
 * @apiUse AccountFailureWriteRespone
 */
const update = {
	customCursor: accountList,
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {GET} /api/v1/account get account details
 * @apiName GetAccount
 * @apiGroup Account
 *
 * @apiUse authorizeRouteHeaders
 *
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting user accounts used for
 * payments
 *
 * @apiUse AccountSuccessRespone
 *
 * @apiuse AccountSuccessExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 200 ok
 * 	null
 *
 */
const list = {
	customCursor: accountList,
	middleware: {
		before: [middleware.authorizeRoute],
	},
};

const account = {
	resources: {
		create,
		update,
		list,
	},
};

module.exports = account;
