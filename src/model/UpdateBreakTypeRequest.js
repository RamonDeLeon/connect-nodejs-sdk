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
var BreakType = require('./BreakType');




/**
 * The UpdateBreakTypeRequest model module.
 * @module model/UpdateBreakTypeRequest
 */

/**
 * Constructs a new <code>UpdateBreakTypeRequest</code>.
 * A request to update a &#x60;BreakType&#x60;
 * @alias module:model/UpdateBreakTypeRequest
 * @class
 * @param breakType {module:model/BreakType} The updated `BreakType`.
 */
var exports = function(breakType) {
  var _this = this;

  _this['break_type'] = breakType;
};

/**
 * Constructs a <code>UpdateBreakTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateBreakTypeRequest} obj Optional instance to populate.
 * @return {module:model/UpdateBreakTypeRequest} The populated <code>UpdateBreakTypeRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('break_type')) {
      obj['break_type'] = BreakType.constructFromObject(data['break_type']);
    }
    }
  return obj;
}

/**
 * The updated `BreakType`.
 * @member {module:model/BreakType} break_type
 */
exports.prototype['break_type'] = undefined;



module.exports = exports;



