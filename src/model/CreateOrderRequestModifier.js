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
var Money = require('./Money');




/**
 * @deprecated
 * The CreateOrderRequestModifier model module.
 * @module model/CreateOrderRequestModifier
 */

/**
 * Constructs a new <code>CreateOrderRequestModifier</code>.
 * __Deprecated__: Please use the [OrderLineItemModifier](#type-orderlineitemmodifier) type instead.  Represents a modifier applied to a single line item.  Modifiers can reference existing objects in a merchant catalog or be constructed ad hoc at the time of purchase by providing a name and price.
 * @alias module:model/CreateOrderRequestModifier
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>CreateOrderRequestModifier</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequestModifier} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequestModifier} The populated <code>CreateOrderRequestModifier</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('base_price_money')) {
      obj['base_price_money'] = Money.constructFromObject(data['base_price_money']);
    }
    }
  return obj;
}

/**
 * The catalog object ID of a `CatalogModifier`.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * Only used for ad hoc modifiers. The name of the modifier. `name` cannot exceed 255 characters.  Do not provide a value for `name` if you provide a value for `catalog_object_id`.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The base price for the modifier.  `base_price_money` is required for ad hoc modifiers. If both `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined `CatalogModifier` price.
 * @member {module:model/Money} base_price_money
 */
exports.prototype['base_price_money'] = undefined;



module.exports = exports;



