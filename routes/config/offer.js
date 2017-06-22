const middleware = require('./../middleware');
const customCursor = require('./../restCursor');

const ROUTE_ALIAS = 'offer';


/**
 * @apiDefine  OfferSuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {number} budget tag for the offer
 * @apiSuccess {string} detail full description of the offer
 * @apiSuccess {string} category category the offer
 * @apiSuccess {string} subcategory the subcategory the offer belongs to
 * @apiSuccess {string} expDate when the offer will expire
 * @apiSuccess {string} acceptedBy uniqueId for the user who accepted It
 * @apiSuccess {string} author my unique id | my details
 */

/**
 *  @apiDefine  OfferSuccessRespone
 *
 * @apiParam {number} budget tag for the offer
 * @apiParam {string} detail full description of the offer
 * @apiParam {string} category category the offer
 * @apiParam {string} [subcategory] the subcategory the offer belongs to
 * @apiParam {string} expDate when the offer will expire
 * @apiParam {string} [acceptedBy] uniqueId for the user who accepted It
 */

/**
 *	 @apiDefine  OfferSuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 201 created
 * 	 {
 * 	 	 "_id" : "5902b1ad83ba31206800da35",
 * 	 	 "budget" : 0,
 * 	 	 "expDate" : ISODate("2017-06-27T23:00:00Z",
 * 	 	 "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\ntempor",
 * 	 	 "category" : "Web Design",
 * 	 	 "author" : "58f3faedd54ab01c60ad5585",
 * 	 	 "acceptedBy" : "591afbb24938021bc8bd90c9",
 * 	 	 "subcategory" : ""
 * 	 }
 */

 /**
  * @apiDefine  OfferSuccessListRespone
  *
  * @apiSuccess {Object[]} offers objects of offers created
	* @apiSuccess {string} offers._id unique id generated as idendier
  * @apiSuccess {number} offers.budget tag for the offer
  * @apiSuccess {string} offers.detail full description of the offer
  * @apiSuccess {string} offers.category category the offer
  * @apiSuccess {string} offers.subcategory the subcategory the offer belongs to
  * @apiSuccess {string} offers.expDate when the offer will expire
  * @apiSuccess {string} offers.acceptedBy uniqueId for the user who accepted It
  * @apiSuccess {string} offers.author my unique id | my details
  */

/**
  *	 @apiDefine  OfferSuccessListExample
  *
  * @apiSuccessExample {json} Success-Response:
  * 	HTTP/1.1 200 created
  * 	[
	* 	 {
  * 	 	 "_id" : "58f7ee5bdb33611ce4ae3336",
  * 	 	 "expDate" : ISODate("2017-05-03T23:00:00Z",
  * 	 	 "budget" : 7500,
  * 	 	 "author" : "58f401232d435c23047069b4",
  * 	 	 "detail" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\ntempor",
  * 	 	 "category" : "Web Design",
  * 	 	 "subcategory" : ""
  * 	 },
  * 	 {
  * 	 	 "_id" : "5902b1ad83ba31206800da35",
  * 	 	 "budget" : 0,
  * 	 	 "expDate" : ISODate("2017-06-27T23:00:00Z",
  * 	 	 "detail" : "testing things being built by me",
  * 	 	 "category" : "Web Design",
  * 	 	 "author" : "58f3faedd54ab01c60ad5585",
  * 	 	 "acceptedBy" : "591afbb24938021bc8bd90c9",
  * 	 	 "subcategory" : ""
  * 	 }
  * 	]
  */

/**
 *  @apiDefine  OfferFailureWriteRespone
 *
 * @apiError GigFail  failure during validation
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 406 unacceptable
 * 	{
 * 	mgs: "validation error message object"
 * 	}
 *
 */

/**
 * @apiDefine  OfferWriteParamExample
 *
 * @apiParamExample {json}  Offer-Write-Json-Example:
 * 	 {
 * 	 	 "budget" : 0,
 * 	 	 "expDate" : ISODate("2017-06-27T23:00:00Z",
 * 	 	 "detail" : "testing things being built by me",
 * 	 	 "category" : "Web Design",
 * 	 	 "acceptedBy" : "591afbb24938021bc8bd90c9  when accepting",
 * 	 	 "subcategory" : ""
 * 	 }
 */


 /**
  * @api {POST} /api/v1/offer create offers
  * @apiName CreateOffer
  * @apiGroup Offer
  *
  * @apiUse authorizeRouteHeaders
  *
  * @apiDescription this endpoint is responsible
  * for creating offers for audience to apply and
  * bid for
  *
  * @apiUse  OfferSuccessRespone
  *
  * @apiUse  OfferWriteParamExample
  *
  * @apiUse  OfferSuccessRespone
  *
  * @apiuse  OfferSuccessExample
  *
  * @apiUse  OfferFailureWriteRespone
  */
const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {PATCH} /api/v1/offer/:id update Offer
 * @apiName Updateoffer
 * @apiGroup Offer
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} unique Gig identifer
 *
 * @apiDescription this endpoint is responsible
 * for updating an existing offer created by a
 * user
 *
 * @apiUse  OfferSuccessRespone
 *
 * @apiUse  OfferWriteParamExample
 *
 * @apiUse  OfferSuccessRespone
 *
 * @apiuse  OfferSuccessExample
 *
 * @apiUse  OfferFailureWriteRespone
 */
const update = {
	middleware: {
		before: [middleware.authorizeRoute, customCursor.offerReq],
	},
};


/**
 * @api {GET} /api/v1/offer get Offer lists
 * @apiName Listoffers
 * @apiGroup Offer
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for retrieving and searching Offers dyanmically
 * using params and _id  provided as querys
 * returns a list filtered from the query
 *
 * @apiUse  OfferSuccessRespone
 * @apiParam {string} _id unique id for Gig
 * @apiUse ListQueryScheme
 *
 * @apiUse  OfferSuccessListRespone
 *
 * @apiuse  OfferSuccessListExample
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
	}, {
		path: 'acceptedBy',
	}],
};


/**
 * @api {GET} /api/v1/offer/:id get Offer details
 * @apiName Getoffer
 * @apiGroup Offer
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} id unique id to retrieve a Bid meant for a bid
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting user Gig.
 *
 * @apiUse  OfferSuccessRespone
 *
 * @apiuse  OfferSuccessExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 200 ok
 * 	null
 *
 */
const retrieve = {
	populate: [{
		path: 'author',
	}, {
		path: 'acceptedBy',
	}],
};


const offer = {
	alias: ROUTE_ALIAS,
	resources: {
		create,
		update,
		list,
		retrieve,
	},
};

module.exports = offer;
