angular.module('iat', ['ui.select', 'ngSanitize','ui.router']).config(function($stateProvider) {
	$stateProvider
    .state('search', {
      url: "/search",
      templateUrl: "scripts/views/search.html"
    })
});