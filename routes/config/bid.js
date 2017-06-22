const middleware = require('./../middleware');


/**
 * @apiDefine BidSuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {string} info brief info about the bid for the offer author
 * @apiSuccess {string} price price tag for the offer
 * @apiSuccess {string} offer unique id or offer object
 * @apiSuccess {string} author my unique id | my details
 */

/**
 *  @apiDefine BidWriteParams
 *
 * @apiParam {string} offer unique id for the bid
 * @apiParam {string} price bid price tag for the offer
 * @apiParam {string} [info] info for the offer_athor
 */

/**
 *	 @apiDefine BidSuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 201 created
 * 	{
 * 	"_id": "57f8c68481cc811dc8c42988",
 * 		"offer": "57f8c68481cc811dc8c429b9",
 * 		"price": 10000,
 * 		"info": "i am very good at this kind of bid",
 * 		"author": "57f8c68481cc811dc8c42923"
 * 	}
 */

 /**
  * @apiDefine BidSuccessListRespone
  *
  * @apiSuccess {Object[]} bids various bids tha match filter
  * @apiSuccess {string} bid._id unique id generated as idendier
  * @apiSuccess {string} bid.info brief info about the bid for the offer author
  * @apiSuccess {number} bid.price price tag for the offer
  * @apiSuccess {string} bid.offer unique id or offer object
  * @apiSuccess {string} bid.author my unique id | my details
  */

/**
  *	 @apiDefine BidSuccessListExample
  *
  * @apiSuccessExample {json} Success-Response:
  * 	HTTP/1.1 200 created
  * 	[
	* 	 {
	* 	 	"_id": "57f8c68481cc811dc8c42988",
	* 		"offer": "57f8c68481cc811dc8c429b9",
	* 		"price": 10000,
	* 		"info": "i am very good at this kind of bid",
	* 		"author": "57f8c68481cc811dc8c42923"
	* 	 },
	* 	 {
	* 	 	"_id": "57f8c68481cc811dc8c4299b",
	* 		"offer": "57f8c68481cc811dc8c429b9",
	* 		"price": 18000,
	* 		"info": "i am very good at this kind of docs",
	* 		"author": "57f8c68481cc811dc8c42923"
	* 	 }
  * 	]
  */

/**
 *  @apiDefine BidFailureWriteRespone
 *
 * @apiError BidFail  failure during validation
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 406 unacceptable
 * 	{
 * 	mgs: "validation error message object"
 * 	}
 *
 */

/**
 * @apiDefine BidWriteParamExample
 *
 * @apiParamExample {json} Bid-Write-Json-Example:
 * 	{
 * 	"offer": "57f8c68481cc811dc8c429b9",
 * 	"price": 10000,
 * 	"info": "i am very good at this kind of bid",
 * 	}
 */


 /**
  * @api {POST} /api/v1/bid create Bids for offers
  * @apiName CreateBid
  * @apiGroup Bid
  *
  * @apiUse authorizeRouteHeaders
  *
  * @apiDescription this endpoint is responsible
  * for creating user Bids for offers placed by
  * another user
  *
  * @apiUse BidWriteParams
  *
  * @apiUse BidWriteParamExample
  *
  * @apiUse BidSuccessRespone
  *
  * @apiuse BidSuccessExample
  *
  * @apiUse BidFailureWriteRespone
  */
const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {PATCH} /api/v1/bid/:id update Bid details
 * @apiName UpdateBid
 * @apiGroup Bid
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} unique Bid identifer
 *
 * @apiDescription this endpoint is responsible
 * for updating an exiting user Bids from
 * a particular offer
 *
 * @apiUse BidWriteParams
 *
 * @apiUse BidWriteParamExample
 *
 * @apiUse BidSuccessRespone
 *
 * @apiuse BidSuccessExample
 *
 * @apiUse BidFailureWriteRespone
 */
const update = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {GET} /api/v1/bid get bids lists
 * @apiName ListBids
 * @apiGroup Bid
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for retrieving and searching Bids dyanmically
 * using params and _id  provided as querys
 * returns a list filtered from the query
 *
 * @apiUse BidWriteParams
 * @apiParam {string} _id unique id for bid
 * @apiUse ListQueryScheme
 *
 * @apiUse BidSuccessListRespone
 *
 * @apiuse BidSuccessListExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Empty-Response:
 * HTTP/1.1 200 ok
 * 	[]
 *
 */
const list = {
	populate: [{
		path: 'author',
		// selectField: 'email',
	}],
};


/**
 * @api {GET} /api/v1/bid/:id get Bid details
 * @apiName GetBid
 * @apiGroup Bid
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} id unique id to retrieve bid
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting user Bids used for
 * payments
 *
 * @apiUse BidSuccessRespone
 *
 * @apiuse BidSuccessExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 200 ok
 * 	null
 *
 */
const retrieve = {};

const bid = {
	resources: {
		create,
		update,
		list,
		retrieve,
	},
};

module.exports = bid;
