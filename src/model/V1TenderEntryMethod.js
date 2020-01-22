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
 * Enum class V1TenderEntryMethod.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL": "MANUAL",
  /**
   * value: "SCANNED"
   * @const
   */
  "SCANNED": "SCANNED",
  /**
   * value: "SQUARE_CASH"
   * @const
   */
  "SQUARE_CASH": "SQUARE_CASH",
  /**
   * value: "SQUARE_WALLET"
   * @const
   */
  "SQUARE_WALLET": "SQUARE_WALLET",
  /**
   * value: "SWIPED"
   * @const
   */
  "SWIPED": "SWIPED",
  /**
   * value: "WEB_FORM"
   * @const
   */
  "WEB_FORM": "WEB_FORM",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"};

/**
 * Returns a <code>V1TenderEntryMethod</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1TenderEntryMethod} The enum <code>V1TenderEntryMethod</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


