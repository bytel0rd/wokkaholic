/**
 * @apiDefine CategorySuccessRespone
 *
 * @apiSuccess {string} _id unique id generated as idendier
 * @apiSuccess {string} name name for the category
 * @apiSuccess {object[]} children  array of subcategory strings
 */

/**
 *	 @apiDefine CategorySuccessExample
 *
 * @apiSuccessExample {json} Success-Response:
 * 	HTTP/1.1 200 ok
 * 	 {
 * 	 	"_id" : "58f41bbe5e35cb17c0f688c2",
 * 	 	"name" : "Web Design",
 * 	 	"children" : [
 * 	 	 "node js",
 * 	 	 "wordPress designer",
 * 	 	 "Laravel programmer",
 * 	 	 "Web Designer"]
 * 	 }
 */

 /**
  * @apiDefine CategorySuccessListRespone
  *
  * @apiSuccess {Object[]} categories
	* @apiSuccess {string} categories._id unique id generated as idendier
  * @apiSuccess {string} categories.name name for the category
  * @apiSuccess {string[]} categories.children  array of subcategory strings
  */

	/**
  *	 @apiDefine CategorySuccessListExample
  *
  * @apiSuccessExample {json} Success-Response:
  * 	HTTP/1.1 200 ok
  * 	[
	* 	 {
	* 	 	"_id" : "58f41bbe5e35cb17c0f688c2",
	* 	 	"name" : "Web Design",
	* 	 	"children" : [
	* 	 	 "node js",
	* 	 	 "wordPress designer",
	* 	 	 "Laravel programmer",
	* 	 	 "Web Designer"]
	* 	 }
  * 	]
  */


/**
 * @api {GET} /api/v1/category get Categorys lists
 * @apiName ListCategorys
 * @apiGroup Category
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiDescription this endpoint is responsible
 * for retrieving and searching all Categorys dyanmically
 * using params and _id  provided as querys
 * returns a list filtered from the query
 *
 * @apiParam {string} _id unique id for Category
 * @apiUse ListQueryScheme
 *
 * @apiUse CategorySuccessListRespone
 *
 * @apiuse CategorySuccessListExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Empty-Response:
 * HTTP/1.1 200 ok
 * 	[]
 *
 */
const list = {};


/**
 * @api {GET} /api/v1/category/:id get Category details
 * @apiName GetCategory
 * @apiGroup Category
 *
 * @apiUse authorizeRouteHeaders
 *
 * @apiParam {string} id unique id to retrieve Category
 *
 * @apiDescription this endpoint is responsible
 * for retrieving an exiting Categorys
 *
 * @apiUse CategorySuccessRespone
 *
 * @apiuse CategorySuccessExample
 *
 * @apiError NotFOund  null response from the db
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 200 ok
 * 	null
 *
 */
const retrieve = {};


const category = {
	resources: {
		list,
		retrieve,
	},
};

module.exports = category;
