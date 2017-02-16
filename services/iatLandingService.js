var app = angular.module('iat');
	   app.service('iatLandingService', function ($http, $q) {
	var self = this;
	var deffered = $q.defer();
	self.getControllerNames = function(){
		return getAPI('http://adarshnanda93-test.apigee.net/adarsh/getName?name=adarsh');
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