/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ArrayWrapper class.
 * @constructor
 * @member {array} [array]
 * 
 */
function ArrayWrapper(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.array) {
      var tempParametersarray = [];
      parameters.array.forEach(function(element) {
        if (element !== undefined) {
          element = element;
        }
        tempParametersarray.push(element);
      });
      this.array = tempParametersarray;
    }
  }    
}


/**
 * Validate the payload against the ArrayWrapper schema
 *
 * @param {JSON} payload
 *
 */
ArrayWrapper.prototype.serialize = function () {
  var payload = {};
  if (util.isArray(this['array'])) {
    payload['array'] = [];
    for (var i = 0; i < this['array'].length; i++) {
      if (this['array'][i] !== null && this['array'][i] !== undefined) {
        if (typeof this['array'][i].valueOf() !== 'string') {
          throw new Error('this[\'array\'][i] must be of type string.');
        }
        if (payload['array'] === null || payload['array'] === undefined) {
          payload['array'] = {};
        }
        payload['array'][i] = this['array'][i];
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to ArrayWrapper schema
 *
 * @param {JSON} instance
 *
 */
ArrayWrapper.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['array']) {
      var tempInstancearray = [];
      instance['array'].forEach(function(element1) {
        if (element1 !== undefined) {
          element1 = element1;
        }
        tempInstancearray.push(element1);
      });
      this['array'] = tempInstancearray;
    }
  }

  return this;
};

module.exports = ArrayWrapper;
