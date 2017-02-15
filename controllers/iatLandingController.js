var app = angular.module('iat', ['ui.select']);
	   app.controller('iatLandingController', function () {
	var self = this;
	function init(){
		self.controllerNames = ['landing','review', 'confirm'];
	}
	self.operation = function(){
		
	};
	init();
});