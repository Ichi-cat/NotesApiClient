# Notes.ProgressConditionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProgressConditions**](ProgressConditionApi.md#getProgressConditions) | **GET** /ProgressCondition | 

<a name="getProgressConditions"></a>
# **getProgressConditions**
> ProgressConditionListDto getProgressConditions(apiVersion)



### Example
```javascript
import {Notes} from 'notes';
let defaultClient = Notes.ApiClient.instance;


let apiInstance = new Notes.ProgressConditionApi();
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getProgressConditions(apiVersion, (error, data, response) => {
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

[**ProgressConditionListDto**](ProgressConditionListDto.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

