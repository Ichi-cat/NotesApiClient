# Notes.NoteTaskApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteTask**](NoteTaskApi.md#createNoteTask) | **POST** /NoteTask | 
[**deleteNoteTask**](NoteTaskApi.md#deleteNoteTask) | **DELETE** /NoteTask/{id} | 
[**getNoteTaskById**](NoteTaskApi.md#getNoteTaskById) | **GET** /NoteTask/{id} | 
[**getNoteTaskByMatrix**](NoteTaskApi.md#getNoteTaskByMatrix) | **GET** /NoteTask/bymatrix/{id} | 
[**getNoteTaskByProgressCondition**](NoteTaskApi.md#getNoteTaskByProgressCondition) | **GET** /NoteTask/byprogresscondition/{id} | 
[**getNoteTasks**](NoteTaskApi.md#getNoteTasks) | **GET** /NoteTask | 
[**updateNoteTask**](NoteTaskApi.md#updateNoteTask) | **PUT** /NoteTask | 

<a name="createNoteTask"></a>
# **createNoteTask**
> &#x27;String&#x27; createNoteTask(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.CreateNoteTaskVm() // CreateNoteTaskVm | 
};
apiInstance.createNoteTask(apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | 
 **body** | [**CreateNoteTaskVm**](CreateNoteTaskVm.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="deleteNoteTask"></a>
# **deleteNoteTask**
> deleteNoteTask(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.deleteNoteTask(id, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **apiVersion** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNoteTaskById"></a>
# **getNoteTaskById**
> NoteTaskDetailsDto getNoteTaskById(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNoteTaskById(id, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **apiVersion** | **String**|  | 

### Return type

[**NoteTaskDetailsDto**](NoteTaskDetailsDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNoteTaskByMatrix"></a>
# **getNoteTaskByMatrix**
> NoteTaskListDto getNoteTaskByMatrix(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let id = new Notes.MatricesEnum(); // MatricesEnum | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNoteTaskByMatrix(id, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**MatricesEnum**](.md)|  | 
 **apiVersion** | **String**|  | 

### Return type

[**NoteTaskListDto**](NoteTaskListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNoteTaskByProgressCondition"></a>
# **getNoteTaskByProgressCondition**
> NoteTaskListDto getNoteTaskByProgressCondition(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let id = new Notes.ProgressConditionEnum(); // ProgressConditionEnum | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNoteTaskByProgressCondition(id, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**ProgressConditionEnum**](.md)|  | 
 **apiVersion** | **String**|  | 

### Return type

[**NoteTaskListDto**](NoteTaskListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNoteTasks"></a>
# **getNoteTasks**
> NoteTaskListDto getNoteTasks(apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNoteTasks(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | 

### Return type

[**NoteTaskListDto**](NoteTaskListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNoteTask"></a>
# **updateNoteTask**
> updateNoteTask(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteTaskApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.UpdateNoteTaskVm() // UpdateNoteTaskVm | 
};
apiInstance.updateNoteTask(apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | 
 **body** | [**UpdateNoteTaskVm**](UpdateNoteTaskVm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

