const middleware = require('./../middleware');


/**
 * @apiDefine  GiggerSuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {string} accepted whether the gig is accepted
 * @apiSuccess {number} price tag for the gig
 * @apiSuccess {string} info any information for the gig
 * @apiSuccess {string} expDate expiring date for the bid gig
 * @apiSuccess {string} gig the unique id for the gig for the bid
 * @apiSuccess {string} author my unique id | my details
 */

/**
 *  @apiDefine  GiggerWriteParams
 *
 * @apiParam {number} price tag for the gig
 * @apiParam {string} info any information for the gig
 * @apiParam {string} expDate expiring date for the bid gig
 * @apiParam {string} gig the unique id for the gig for the bid
 */

/**
 *	 @apiDefine  GiggerSuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 201 created
 *		 {
 *		 	 "_id" : "592c9fe59a38332008788c8c",
 *		 	 "expDate" : "2017-01-01",
 *		 	 "gig" : "592c9fbe9a38332008788c8b",
 *		 	 "gigAuthor" : "58f3faedd54ab01c60ad5585",
 *		 	 "info" : "am interested in your offwr",
 *		 	 "price" : 5000,
 *		 	 "author" : "58f3faedd54ab01c60ad5585",
 *		 	 "accepted" : false
 *		 }
 */

 /**
  * @apiDefine  GiggerSuccessListRespone
  *
  * @apiSuccess {Object[]} giggers bids  for the Gig alias gigger
	* @apiSuccess {string} gigger._id unique id generated as idendier
  * @apiSuccess {string} gigger.accepted whether the gig is accepted
  * @apiSuccess {number} gigger.price tag for the gig
  * @apiSuccess {string} gigger.info any information for the gig
  * @apiSuccess {string} gigger.expDate expiring date for the bid gig
  * @apiSuccess {string} gigger.gig the unique id for the gig for the bid
  * @apiSuccess {string} gigger.author my unique id | my details  */

/**
  *	 @apiDefine  GiggerSuccessListExample
  *
  * @apiSuccessExample {json} Success-Response:
  * 	HTTP/1.1 200 created
  * 	[
  * 	 	{
  * 	 	 	"_id" : "5925cbe5458b2819e04effe3",
  * 	 	 	"expDate" : "2017-01-01",
  * 	 	 	"gig" : "592571c56c8f761aa4f77934",
  * 	 	 	"gigAuthor" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"info" : "eiwrwhrw",
  * 	 	 	"price" : 8221,
  * 	 	 	"author" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"accepted" : true
  * 	 	 },
  * 	 	 {
  * 	 	 	"_id" : "59263d896c09c10a8422ac40",
  * 	 	 	"expDate" : "2017-01-01",
  * 	 	 	"gig" : "592585bc6c8f761aa4f7793a",
  * 	 	 	"gigAuthor" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"info" : "yruieorr",
  * 	 	 	"price" : 129292,
  * 	 	 	"author" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"accepted" : true
  * 	 	 },
  * 	 	 {
  * 	 	 	"_id" : "592c9fe59a38332008788c8c",
  * 	 	 	"expDate" : "2017-01-01",
  * 	 	 	"gig" : "592c9fbe9a38332008788c8b",
  * 	 	 	"gigAuthor" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"info" : "am interested in your offwr",
  * 	 	 	"price" : 5000,
  * 	 	 	"author" : "58f3faedd54ab01c60ad5585",
  * 	 	 	"accepted" : false
  * 	 	 }
  * 	]
  */

/**
 *  @apiDefine  GiggerFailureWriteRespone
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
 * @apiDefine  GiggerWriteParamExample
 *
 * @apiParamExample {json}  GiggerWriteJsonExample:
 * 	{
 * 	 "category" : "Web Design",
 * 	 "faq" : "qweretwui",
 * 	 "price" : 800,
 * 	 "title" : "ytyuuiuoipopoer",
 * 	 "detail" : "werwerrttyghjil",
 * 	 "requirement" : "sdgfhklooly",
 * 	 "author" : "58f3faedd54ab01c60ad5585",
 * 	}
 */


 /**
  * @api {POST} /api/v1/giger create Bids for Gigs
  * @apiName CreateGigger
  * @apiGroup Giger
  *
  * @apiUse authorizeRouteHeaders
  *
  * @apiDescription this endpoint is responsible
  * for creating user Bids for Gigs placed by
  * another user
  *
  * @apiUse  GiggerWriteParams
  *
  * @apiUse  GiggerWriteParamExample
  *
  * @apiUse  GiggerSuccessRespone
  *
  * @apiuse  GiggerSuccessExample
  *
  * @apiUse  GiggerFailureWriteRespone
  */
const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {PATCH} /api/v1/giger/:id update Bids for Gigs
 * @apiName UpdateGiger
 * @apiGroup Giger
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} unique Gig identifer
 *
 * @apiDescription this endpoint is responsible
 * for updating an existing user Bids for Gigs
 *
 * @apiUse  GiggerWriteParams
 *
 * @apiUse  GiggerWriteParamExample
 *
 * @apiUse  GiggerSuccessRespone
 *
 * @apiuse  GiggerSuccessExample
 *
 * @apiUse  GiggerFailureWriteRespone
 */
const update = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {GET} /api/v1/giger get Bids lists for Gigs
 * @apiName ListGigers
 * @apiGroup Giger
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for retrieving and searching Bids for Gigs dyanmically
 * using params and _id  provided as querys
 * returns a list filtered from the query
 *
 * @apiUse  GiggerWriteParams
 * @apiParam {string} _id unique id for Gig
 * @apiUse ListQueryScheme
 *
 * @apiUse  GiggerSuccessListRespone
 *
 * @apiuse  GiggerSuccessListExample
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
	}],
};


/**
 * @api {GET} /api/v1/giger/:id get bid for Gig details
 * @apiName GetGiger
 * @apiGroup Giger
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} id unique id to retrieve a Bid meant for a bid
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting user Gig.
 *
 * @apiUse  GiggerSuccessRespone
 *
 * @apiuse  GiggerSuccessExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 200 ok
 * 	null
 *
 */
const retrieve = {};


const giger = {
	resources: {
		create,
		update,
		list,
		retrieve,
	},
};

module.exports = giger;
