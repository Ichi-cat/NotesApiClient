/*
 * Notes
 * Backend app with Notes and Notetasks
 *
 * OpenAPI spec version: 1.0.0
 * Contact: staske11111@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CreateNoteTaskVm} from '../model/CreateNoteTaskVm';
import {MatricesEnum} from '../model/MatricesEnum';
import {NoteTaskDetailsDto} from '../model/NoteTaskDetailsDto';
import {NoteTaskListDto} from '../model/NoteTaskListDto';
import {ProblemDetails} from '../model/ProblemDetails';
import {ProgressConditionEnum} from '../model/ProgressConditionEnum';
import {UpdateNoteTaskVm} from '../model/UpdateNoteTaskVm';

/**
* NoteTask service.
* @module api/NoteTaskApi
* @version 1.0.0
*/
export class NoteTaskApi {

    /**
    * Constructs a new NoteTaskApi. 
    * @alias module:api/NoteTaskApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNoteTask operation.
     * @callback moduleapi/NoteTaskApi~createNoteTaskCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateNoteTaskVm} opts.body 
     * @param {module:api/NoteTaskApi~createNoteTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createNoteTask(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createNoteTask");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/NoteTask', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNoteTask operation.
     * @callback moduleapi/NoteTaskApi~deleteNoteTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteTaskApi~deleteNoteTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNoteTask(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNoteTask");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteNoteTask");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/NoteTask/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNoteTaskById operation.
     * @callback moduleapi/NoteTaskApi~getNoteTaskByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteTaskDetailsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteTaskApi~getNoteTaskByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNoteTaskById(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNoteTaskById");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNoteTaskById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoteTaskDetailsDto;

      return this.apiClient.callApi(
        '/NoteTask/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNoteTaskByMatrix operation.
     * @callback moduleapi/NoteTaskApi~getNoteTaskByMatrixCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteTaskListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/MatricesEnum} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteTaskApi~getNoteTaskByMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNoteTaskByMatrix(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNoteTaskByMatrix");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNoteTaskByMatrix");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoteTaskListDto;

      return this.apiClient.callApi(
        '/NoteTask/bymatrix/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNoteTaskByProgressCondition operation.
     * @callback moduleapi/NoteTaskApi~getNoteTaskByProgressConditionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteTaskListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProgressConditionEnum} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteTaskApi~getNoteTaskByProgressConditionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNoteTaskByProgressCondition(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNoteTaskByProgressCondition");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNoteTaskByProgressCondition");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoteTaskListDto;

      return this.apiClient.callApi(
        '/NoteTask/byprogresscondition/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNoteTasks operation.
     * @callback moduleapi/NoteTaskApi~getNoteTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteTaskListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {module:api/NoteTaskApi~getNoteTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNoteTasks(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNoteTasks");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NoteTaskListDto;

      return this.apiClient.callApi(
        '/NoteTask', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNoteTask operation.
     * @callback moduleapi/NoteTaskApi~updateNoteTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNoteTaskVm} opts.body 
     * @param {module:api/NoteTaskApi~updateNoteTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateNoteTask(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling updateNoteTask");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/NoteTask', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}