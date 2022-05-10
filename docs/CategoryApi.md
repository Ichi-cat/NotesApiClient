# Notes.CategoryApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoryApi.md#createCategory) | **POST** /Category | 
[**deleteCategory**](CategoryApi.md#deleteCategory) | **DELETE** /Category/{id} | 
[**getCategories**](CategoryApi.md#getCategories) | **GET** /Category | 
[**updateCategory**](CategoryApi.md#updateCategory) | **PUT** /Category | 

<a name="createCategory"></a>
# **createCategory**
> &#x27;String&#x27; createCategory(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.CategoryApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.CreateCategoryVm() // CreateCategoryVm | 
};
apiInstance.createCategory(apiVersion, opts, (error, data, response) => {
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
 **body** | [**CreateCategoryVm**](CreateCategoryVm.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(id, apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.CategoryApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let apiVersion = "apiVersion_example"; // String | 

apiInstance.deleteCategory(id, apiVersion, (error, data, response) => {
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

<a name="getCategories"></a>
# **getCategories**
> CategoryListDto getCategories(apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.CategoryApi();
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getCategories(apiVersion, (error, data, response) => {
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

[**CategoryListDto**](CategoryListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCategory"></a>
# **updateCategory**
> updateCategory(apiVersion, opts)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.CategoryApi();
let apiVersion = "apiVersion_example"; // String | 
let opts = { 
  'body': new Notes.UpdateCategoryVm() // UpdateCategoryVm | 
};
apiInstance.updateCategory(apiVersion, opts, (error, data, response) => {
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
 **body** | [**UpdateCategoryVm**](UpdateCategoryVm.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

