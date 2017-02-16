var app = angular.module('iat');
	   app.service('iatLandingService', function ($http, $q) {
	var self = this;
	var deffered = $q.defer();
	self.getControllerNames = function(){
		return getAPI('http://10.221.2.21:8080/iat/webapi/myresource/searchCriterion?fileType=controller');
	};
	var getAPI = function(targetUrl){
		var request = $http({
                        method: 'get',
                        url: targetUrl,
                    });
		request.then(function(response){
			debugger;
			deffered.resolve(response.data);
		},function(error){
			deffered.reject(error);
		});
		return deffered.promise;
	}
});