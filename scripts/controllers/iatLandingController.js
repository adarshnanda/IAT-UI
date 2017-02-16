var app = angular.module('iat', ['ui.select', 'ngSanitize']);
	   app.controller('iatLandingController', function (iatLandingService) {
	var self = this;
	function init(){
		self.searchFields = [{}];
		self.controllerNames = [];
		self.getControllerName();
	}
	self.getControllerName = function(){
		iatLandingService.getControllerNames().then(function(response){
			angular.forEach(response.fileNames, function(fileName){
				self.controllerNames.push(fileName);
			});
		});
	};
	self.addExtraSearch = function(){
		self.searchFields.push({});
	};
	init();
});