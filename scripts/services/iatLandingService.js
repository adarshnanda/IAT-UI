var app = angular.module('iat');
	   app.service('iatLandingService', function ($http, $q, API_ENDPOINTS) {
	var self = this;
	var deffered = $q.defer();
	self.getControllerNames = function(){
		return getAPI(API_ENDPOINTS.API001_getName);
	};
	var getAPI = function(targetUrl){
		var request = $http({
                        method: 'get',
                        url: targetUrl,
                    });
		request.then(function(response){
			deffered.resolve(response.data);
		},function(error){
			var mock={
				fileNames:[
				'confirm',
				'review',
				'landing'
				]
			};
			deffered.resolve(mock);
		});
		return deffered.promise;
	}
});