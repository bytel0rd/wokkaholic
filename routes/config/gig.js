const middleware = require('./../middleware');
const customCursor = require('./../restCursor');


/**
 * @apiDefine GigSuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {string} detail full description of the gig
 * @apiSuccess {string} faq any faq people might ask about Gig
 * @apiSuccess {string} requirement any requirement for the gig
 * @apiSuccess {number} price tag for the gig
 * @apiSuccess {string} deliveryDate gig delivery date
 * @apiSuccess {string} title brief info about the gig
 * @apiSuccess {string} category category the gig belongs to
 * @apiSuccess {string} subcategory subcategory gig belongs to
 * @apiSuccess {string} author my unique id | my details
 */

/**
 *  @apiDefine GigWriteParams
 *
 * @apiParam {string} title brief info about the gig
 * @apiParam {string} category category the gig belongs to
 * @apiParam {string} [subcategory] subcategory gig belongs to
 * @apiParam {string} detail full description of the gig
 * @apiParam {string} price tag for the gig
 * @apiParam {string} deliveryDate gig delivery dater
 * @apiParam {string} [requirement] any requirement for the gig
 * @apiParam {string} [faq] any faq people might ask about Gig
 */

/**
 *	 @apiDefine GigSuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 201 created
 * 	{
 * 	 "_id": "57f8c68481cc811dc8c42988",
 * 	 "category" : "Web Design",
 * 	 "faq" : "how busy is the traffic? : very busy trafic",
 * 	 "price" : 800,
 * 	 "title" : "build car software",
 * 	 "detail" : "i want to build an traffic software",
 * 	 "requirement" : "sdgfhklooly"
 * 	}
 */

 /**
  * @apiDefine GigSuccessListRespone
  *
  * @apiSuccess {Object[]} Gigs various Gigs tha match filter
	* @apiSuccess {string} gig._id unique id generated as idendier
  * @apiSuccess {string} gig.detail full description of the gig
  * @apiSuccess {string} gig.faq any faq people might ask about Gig
  * @apiSuccess {string} gig.requirement any requirement for the gig
  * @apiSuccess {number} gig.price tag for the gig
  * @apiSuccess {string} gig.deliveryDate gig delivery date
  * @apiSuccess {string} gig.title brief info about the gig
  * @apiSuccess {string} gig.category category the gig belongs to
  * @apiSuccess {string} gig.subcategory subcategory gig belongs to
  * @apiSuccess {string} gig.author my unique id | my details
  */

/**
  *	 @apiDefine GigSuccessListExample
  *
  * @apiSuccessExample {json} Success-Response:
  * 	HTTP/1.1 200 created
  * 	[
	*			{
	*			 "_id" : ObjectId("592571c56c8f761aa4f77934"),
	*			 "category" : "Web Design",
	*			 "faq" : "qweretwui",
	*			 "price" : 800,
	*			 "title" : "ytyuuiuoipopoer",
	*			 "detail" : "werwerrttyghjil",
	*			 "requirement" : "sdgfhklooly",
	*			 "author" : "58f3faedd54ab01c60ad5585"
	*			},
	*			{
	*			 "_id" : ObjectId("59257f3f6c8f761aa4f77936"),
	*			 "category" : "Web Design",
	*			 "faq" : "ghghgyuguihhijo",
	*			 "price" : 7500,
	*			 "title" : "ihpiuhiijio",
	*			 "detail" : "iguyglhjklnj",
	*			 "requirement" : "ih;iuhuihuyhj",
	*			 "author" : "58f3faedd54ab01c60ad5585"
	*			}
  * 	]
  */

/**
 *  @apiDefine GigFailureWriteRespone
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
 * @apiDefine GigWriteParamExample
 *
 * @apiParamExample {json} GigWriteJsonExample:
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
  * @api {POST} /api/v1/Gig create Gigs for offers
  * @apiName CreateGig
  * @apiGroup Gig
  *
  * @apiUse authorizeRouteHeaders
  *
  * @apiDescription this endpoint is responsible
  * for creating user Gigs for offers placed by
  * another user
  *
  * @apiUse GigWriteParams
  *
  * @apiUse GigWriteParamExample
  *
  * @apiUse GigSuccessRespone
  *
  * @apiuse GigSuccessExample
  *
  * @apiUse GigFailureWriteRespone
  */
const create = {
	middleware: {
		before: [middleware.authorizeRoute],
	},
};


/**
 * @api {PATCH} /api/v1/Gig/:id update Gig details
 * @apiName UpdateGig
 * @apiGroup Gig
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} unique Gig identifer
 *
 * @apiDescription this endpoint is responsible
 * for updating an exiting user Gigs from
 * a particular offer
 *
 * @apiUse GigWriteParams
 *
 * @apiUse GigWriteParamExample
 *
 * @apiUse GigSuccessRespone
 *
 * @apiuse GigSuccessExample
 *
 * @apiUse GigFailureWriteRespone
 */
const update = {
	middleware: {
		before: [middleware.authorizeRoute, customCursor.offerReq],
	},
};


/**
 * @api {GET} /api/v1/gig get Gigs lists
 * @apiName ListGigs
 * @apiGroup Gig
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for retrieving and searching Gigs dyanmically
 * using params and _id  provided as querys
 * returns a list filtered from the query
 *
 * @apiUse GigWriteParams
 * @apiParam {string} _id unique id for Gig
 * @apiUse ListQueryScheme
 *
 * @apiUse GigSuccessListRespone
 *
 * @apiuse GigSuccessListExample
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
 * @api {GET} /api/v1/gig/:id get Gig details
 * @apiName GetGig
 * @apiGroup Gig
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} id unique id to retrieve Gig
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting user Gig.
 *
 * @apiUse GigSuccessRespone
 *
 * @apiuse GigSuccessExample
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

const gig = {
	resources: {
		create,
		update,
		list,
		retrieve,
	},
};

module.exports = gig;
