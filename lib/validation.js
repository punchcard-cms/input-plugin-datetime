'use strict';

/**
 * Validation for Datetime Input Plugin
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} input.target - the triggering input's name and value as {String}
 * @param {String} input.target.name - the triggering input's name
 * @param {String|Bool} input.target.value - the triggering input's value
 * @param {Object} input.all - all inputs in this plugin's instance
 * @param {String|Bool} input.all.datetime - value of input datetime
 * @param {Object} [settings] - settings for this input plugin instance
 * @param {Object} [settings.target] - the triggering input's settings as an {Object}
 * @param {Object} [settings.all] - all settings in this plugin instance as an {Object}
 * @param {Object} [settings.all.datetime] - settings of input datetime {Object}
 *
 * @returns {Bool|String} true or a string with the text describing the error
 *
 * @module datetimeValidation
 */
const isDate = require('validator/lib/isDate');


module.exports = function datetimeValidation(input) {
  if (input.target.value && !isDate(input.target.value)) {
    return `${input.target.name} must be a date!`;
  }

  return true;
};
