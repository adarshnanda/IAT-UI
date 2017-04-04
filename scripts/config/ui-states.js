angular.module('iat', ['ui.select', 'ngSanitize','ui.router']).config(function($stateProvider, $locationProvider) {
	$stateProvider
    .state('search', {
      url: "/search",
      templateUrl: "scripts/views/search.html"
    });
    $locationProvider.html5Mode(true);
});