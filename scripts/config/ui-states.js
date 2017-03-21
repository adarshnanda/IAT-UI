angular.module('iat').config(function($stateProvider) {
	$stateProvider
    .state('search', {
      url: "/search",
      templateUrl: "search.html"
    })
});