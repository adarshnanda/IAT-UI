angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/views/search.html',
    "<div class=\"row container-fluid m-t-20 text-center\" ng-if=\"ctrl.displayGraph\">\r" +
    "\n" +
    "<canvas id=\"viewport\" arbor data=\"ctrl.data1\" height=\"600\" width=\"600\">\r" +
    "\n" +
    "</canvas>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
