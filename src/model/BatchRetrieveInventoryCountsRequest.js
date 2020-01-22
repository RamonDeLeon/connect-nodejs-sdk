/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The BatchRetrieveInventoryCountsRequest model module.
 * @module model/BatchRetrieveInventoryCountsRequest
 */

/**
 * Constructs a new <code>BatchRetrieveInventoryCountsRequest</code>.
 *
 * @alias module:model/BatchRetrieveInventoryCountsRequest
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>BatchRetrieveInventoryCountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchRetrieveInventoryCountsRequest} obj Optional instance to populate.
 * @return {module:model/BatchRetrieveInventoryCountsRequest} The populated <code>BatchRetrieveInventoryCountsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_ids')) {
      obj['catalog_object_ids'] = ApiClient.convertToType(data['catalog_object_ids'], ['String']);
    }
      if (data.hasOwnProperty('location_ids')) {
      obj['location_ids'] = ApiClient.convertToType(data['location_ids'], ['String']);
    }
      if (data.hasOwnProperty('updated_after')) {
      obj['updated_after'] = ApiClient.convertToType(data['updated_after'], 'String');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Filters results by `CatalogObject` ID. Only applied when set. Default: unset.
 * @member {Array.<String>} catalog_object_ids
 */
exports.prototype['catalog_object_ids'] = undefined;
/**
 * Filters results by `Location` ID. Only applied when set. Default: unset.
 * @member {Array.<String>} location_ids
 */
exports.prototype['location_ids'] = undefined;
/**
 * Provided as an RFC 3339 timestamp. Returns results whose `calculated_at` value is after the given time. Default: UNIX epoch (`1970-01-01T00:00:00Z`).
 * @member {String} updated_after
 */
exports.prototype['updated_after'] = undefined;
/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



