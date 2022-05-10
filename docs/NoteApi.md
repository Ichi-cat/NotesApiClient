# Notes.NoteApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](NoteApi.md#createNote) | **POST** /Note | 
[**deleteNote**](NoteApi.md#deleteNote) | **DELETE** /Note/{id} | 
[**getNoteById**](NoteApi.md#getNoteById) | **GET** /Note/{id} | 
[**getNotes**](NoteApi.md#getNotes) | **GET** /Note | 
[**getNotesByCategoryId**](NoteApi.md#getNotesByCategoryId) | **GET** /Note/ByCategory/{id} | 
[**updateNote**](NoteApi.md#updateNote) | **PUT** /Note | 

<a name="createNote"></a>
# **createNote**
> &#x27;String&#x27; createNote(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.CreateNoteVm() // CreateNoteVm | 
};
apiInstance.createNote(apiVersion, opts, (error, data, response) => {
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
 **body** | [**CreateNoteVm**](CreateNoteVm.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="deleteNote"></a>
# **deleteNote**
> deleteNote(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.deleteNote(id, apiVersion, (error, data, response) => {
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

<a name="getNoteById"></a>
# **getNoteById**
> NoteDetailsDto getNoteById(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNoteById(id, apiVersion, (error, data, response) => {
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

[**NoteDetailsDto**](NoteDetailsDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotes"></a>
# **getNotes**
> NoteListDto getNotes(apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNotes(apiVersion, (error, data, response) => {
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

[**NoteListDto**](NoteListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotesByCategoryId"></a>
# **getNotesByCategoryId**
> NoteListDto getNotesByCategoryId(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getNotesByCategoryId(id, apiVersion, (error, data, response) => {
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

[**NoteListDto**](NoteListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNote"></a>
# **updateNote**
> updateNote(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.NoteApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.UpdateNoteVm() // UpdateNoteVm | 
};
apiInstance.updateNote(apiVersion, opts, (error, data, response) => {
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
 **body** | [**UpdateNoteVm**](UpdateNoteVm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

