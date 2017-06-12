angular.module('iat').service('iatLandingService', function ($http, $q, API_ENDPOINTS) {
	var self = this;
	self.getFileType = function(){
		return getAPI(API_ENDPOINTS.API001_getFileType);
	};
	self.getFileName = function(params){
		var url = prepareUrlQueryString(API_ENDPOINTS.API002_getFileName, params);
		return getAPI(url);
	};
	self.getMethodName = function(params){
		var url = prepareUrlQueryString(API_ENDPOINTS.API003_getMethodName, params);
		return getAPI(url);
	};



	var prepareUrlQueryString = function (endPoint, queryParams) {
      var appendToEndPoint = (endPoint && endPoint.indexOf('?') >= 0) ? '&' : '?';
      if (self.nullable(queryParams)) {
        angular.forEach(queryParams, function (val, key) {
          appendToEndPoint = appendToEndPoint.concat(encodeURIComponent(key))
            .concat('=')
            .concat(encodeURIComponent(val));
          appendToEndPoint = appendToEndPoint.concat('&');
        });
      }
      return endPoint.concat(appendToEndPoint.substring(0, appendToEndPoint.length - 1));
    };

    self.nullable = function(data){
    	if(data===null || data==='' || data===undefined){
    		return false;
    	}
    	return true;
    }

	var getAPI = function(targetUrl){
		var deffered = $q.defer();
		var request = $http({
                        method: 'get',
                        url: targetUrl
                    });
		request.then(function(response){
			deffered.resolve(response.data);
		});
		return deffered.promise;
	}
});