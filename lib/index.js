'use strict';

const isEmpty = require('lodash.isempty');
const isString = require('lodash.isstring');

/**
 * String type attributes must have lengths greater than zero while some of the
 * properties from the 3rd API response may contain an empty string.
 * This function will convert those empty string values to 'NULL'.
 *
 * See http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property
 * @param {Object} item - the Upwork resource
 * @returns {Object} item - the normalized value of Upwork resource
 */
module.exports = (item) => {
  for (let prop in item) {
    if (item.hasOwnProperty(prop)) {
      if (isString(item[prop]) && isEmpty(item[prop])) {
        item[prop] = 'NULL';
      }
    }
  }

  return item;
};
