var app = angular.module('iat', ['ui.select']);
	   app.controller('iatLandingController', function (iatLandingService) {
	var self = this;
	function init(){
		self.controllerNames = [];
		self.getControllerName();
	}
	self.getControllerName = function(){
		iatLandingService.getControllerNames().then(function(response){
			angular.forEach(response.fileNames, function(fileName){
				self.controllerNames.push(fileName);
			});
		});
	}
	init();
});