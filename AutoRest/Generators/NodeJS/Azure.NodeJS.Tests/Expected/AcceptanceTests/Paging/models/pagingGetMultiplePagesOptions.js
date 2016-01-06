/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PagingGetMultiplePagesOptions class.
 * @constructor
 * Additional parameters for the getMultiplePages operation.
 * @member {number} [maxresults] Sets the maximum number of items to return in
 * the response.
 * 
 * @member {number} [timeout] Sets the maximum time that the server can spend
 * processing the request, in seconds. The default is 30 seconds. Default
 * value: 30 .
 * 
 */
function PagingGetMultiplePagesOptions(parameters) {
  if (parameters === null || parameters === undefined) {
    parameters = {};
  }
  if (parameters.timeout === undefined) {
    parameters.timeout = 30;
  }
  if (parameters !== null && parameters !== undefined) {
    if (parameters.maxresults !== undefined) {
      this.maxresults = parameters.maxresults;
    }
    if (parameters.timeout !== undefined) {
      this.timeout = parameters.timeout;
    }
  }    
}



module.exports = PagingGetMultiplePagesOptions;
