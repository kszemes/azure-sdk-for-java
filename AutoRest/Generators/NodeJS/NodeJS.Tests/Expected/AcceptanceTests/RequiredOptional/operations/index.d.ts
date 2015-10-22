/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { RequestOptions, WebResource } from "ms-rest";
import * as stream from "stream";
import * as models from "../models";


/**
 * @class
 * Implicit
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestRequiredOptionalTestService.
 */
export interface Implicit {

    /**
     * Test implicitly required path parameter
     *
     * @param {string} pathParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    getRequiredPath(pathParameter: string, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly optional query parameter
     *
     * @param {string} [queryParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    putOptionalQuery(queryParameter: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly optional header parameter
     *
     * @param {string} [queryParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    putOptionalHeader(queryParameter: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly optional body parameter
     *
     * @param {string} [bodyParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    putOptionalBody(bodyParameter: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly required path parameter
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    getRequiredGlobalPath(options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly required query parameter
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    getRequiredGlobalQuery(options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test implicitly optional query parameter
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    getOptionalGlobalQuery(options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;
}

/**
 * @class
 * Explicit
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestRequiredOptionalTestService.
 */
export interface Explicit {

    /**
     * Test explicitly required integer. Please put null and the client library
     * should throw before the request is sent.
     *
     * @param {number} bodyParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredIntegerParameter(bodyParameter: number, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional integer. Please put null.
     *
     * @param {number} [bodyParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalIntegerParameter(bodyParameter: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required integer. Please put a valid int-wrapper with
     * 'value' = null and the client library should throw before the request is
     * sent.
     *
     * @param {object} bodyParameter
     * 
     * @param {number} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredIntegerProperty(bodyParameter: models.IntWrapper, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional integer. Please put a valid int-wrapper with
     * 'value' = null.
     *
     * @param {object} [bodyParameter]
     * 
     * @param {number} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalIntegerProperty(bodyParameter: models.IntOptionalWrapper, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required integer. Please put a header 'headerParameter' =>
     * null and the client library should throw before the request is sent.
     *
     * @param {number} headerParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredIntegerHeader(headerParameter: number, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional integer. Please put a header 'headerParameter' =>
     * null.
     *
     * @param {number} [headerParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalIntegerHeader(headerParameter: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required string. Please put null and the client library
     * should throw before the request is sent.
     *
     * @param {string} bodyParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredStringParameter(bodyParameter: string, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional string. Please put null.
     *
     * @param {string} [bodyParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalStringParameter(bodyParameter: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required string. Please put a valid string-wrapper with
     * 'value' = null and the client library should throw before the request is
     * sent.
     *
     * @param {object} bodyParameter
     * 
     * @param {string} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredStringProperty(bodyParameter: models.StringWrapper, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional integer. Please put a valid string-wrapper with
     * 'value' = null.
     *
     * @param {object} [bodyParameter]
     * 
     * @param {string} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalStringProperty(bodyParameter: models.StringOptionalWrapper, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required string. Please put a header 'headerParameter' =>
     * null and the client library should throw before the request is sent.
     *
     * @param {string} headerParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredStringHeader(headerParameter: string, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional string. Please put a header 'headerParameter' =>
     * null.
     *
     * @param {string} [bodyParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalStringHeader(bodyParameter: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required complex object. Please put null and the client
     * library should throw before the request is sent.
     *
     * @param {object} bodyParameter
     * 
     * @param {number} [bodyParameter.id]
     * 
     * @param {string} [bodyParameter.name]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredClassParameter(bodyParameter: models.Product, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional complex object. Please put null.
     *
     * @param {object} [bodyParameter]
     * 
     * @param {number} [bodyParameter.id]
     * 
     * @param {string} [bodyParameter.name]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalClassParameter(bodyParameter: models.Product, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required complex object. Please put a valid class-wrapper
     * with 'value' = null and the client library should throw before the request
     * is sent.
     *
     * @param {object} bodyParameter
     * 
     * @param {object} [bodyParameter.value]
     * 
     * @param {number} [bodyParameter.value.id]
     * 
     * @param {string} [bodyParameter.value.name]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredClassProperty(bodyParameter: models.ClassWrapper, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional complex object. Please put a valid class-wrapper
     * with 'value' = null.
     *
     * @param {object} [bodyParameter]
     * 
     * @param {object} [bodyParameter.value]
     * 
     * @param {number} [bodyParameter.value.id]
     * 
     * @param {string} [bodyParameter.value.name]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalClassProperty(bodyParameter: models.ClassOptionalWrapper, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required array. Please put null and the client library
     * should throw before the request is sent.
     *
     * @param {array} bodyParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredArrayParameter(bodyParameter: string[], options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional array. Please put null.
     *
     * @param {array} [bodyParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalArrayParameter(bodyParameter: string[], options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required array. Please put a valid array-wrapper with
     * 'value' = null and the client library should throw before the request is
     * sent.
     *
     * @param {object} bodyParameter
     * 
     * @param {array} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredArrayProperty(bodyParameter: models.ArrayWrapper, options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional array. Please put a valid array-wrapper with
     * 'value' = null.
     *
     * @param {object} [bodyParameter]
     * 
     * @param {array} [bodyParameter.value]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalArrayProperty(bodyParameter: models.ArrayOptionalWrapper, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly required array. Please put a header 'headerParameter' =>
     * null and the client library should throw before the request is sent.
     *
     * @param {array} headerParameter
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link ErrorModel} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postRequiredArrayHeader(headerParameter: string[], options: RequestOptions, callback: (err: Error, result: models.ErrorModel, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Test explicitly optional integer. Please put a header 'headerParameter' =>
     * null.
     *
     * @param {array} [headerParameter]
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    postOptionalArrayHeader(headerParameter: string[], options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;
}
