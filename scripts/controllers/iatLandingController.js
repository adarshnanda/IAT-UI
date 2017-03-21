var app = angular.module('iat', ['ui.select', 'ngSanitize','ui.router']);
/*app.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});*/
app.controller('iatLandingController', function ($scope, iatLandingService) {
	var self = this;
	function init(){
		self.searchFields = [];
		self.fileNames = [];
    self.fileTypes = [];
    self.methodNames = [];
		self.getFileType();
		self.addExtraSearch();
		self.data1={
			"nodes":{},
    		"edges":{}
    	};
	}
	self.getFileType = function(){
		iatLandingService.getFileType().then(function(response){
			angular.forEach(response.resourceNames, function(fileType){
				self.fileTypes.push(fileType);
			});
		});
	};

  self.getFileName = function(search, index){
    var params = {
      fileType: search.fileType
    };
    self.searchFields[index].fileName = undefined;
    self.searchFields[index].methodName = undefined;
    self.fileNames = [];
    iatLandingService.getFileName(params).then(function(response){
      search.fileName = search.methodName =undefined;
      angular.forEach(response.resourceNames, function(fileName){
        self.fileNames.push(fileName);
      });
    });
  };

  self.getMethodName = function(search, index){
    var params = {
      fileType: search.fileType,
      fileName: search.fileName
    };
    self.searchFields[index].methodName = undefined;
    self.methodNames = [];
    iatLandingService.getMethodName(params).then(function(response){
      search.methodName =undefined;
      angular.forEach(response.resourceNames, function(methodName){
        self.methodNames.push(methodName);
      });
    });
  };

	self.addExtraSearch = function(){
		self.searchFields.push({});
		self.index = self.searchFields.length-1;
	};
  self.search = function(){
    self.data1 = {};

    createGraph();
    self.displayGraph = true;
  };
	function createGraph() {
		self.data1 = {
  "nodes": {
    "isDateEligible": {
      "color": "#EEB211",
      "shape": "dot",
      "radius": 39,
      "fileName":"billingDueDateController",
      "label": "isDateEligible",
      "alpha": 1
    },
    "clickableDateOption": {
      "color": "#EEB211",
      "shape": "dot",
      "fileName":"billingDueDateController",
      "radius": 39,
      "label": "clickableDateOption",
      "alpha": 1
    },
    "clickedDateChange": {
      "color": "#EEB211",
      "fileName":"billingDueDateController",
      "shape": "dot",
      "radius": 39,
      "label": "clickedDateChange",
      "alpha": 1
    },
    "newDateSelected": {
      "color": "#EEB211",
      "fileName":"billingDueDateController",
      "shape": "dot",
      "radius": 39,
      "label": "newDateSelected",
      "alpha": 1
    },
    "dateNotEligible": {
      "fileName":"billingDueDateController",
      "color": "#EEB211",
      "shape": "dot",
      "radius": 39,
      "label": "dateNotEligible",
      "alpha": 1
    },
    "newDateTitleSelected": {
      "color": "#EEB211",
      "fileName":"billingDueDateController",
      "shape": "dot",
      "radius": 39,
      "label": "newDateTitleSelected",
      "alpha": 1
    }
  },
  "edges": {
    "isDateEligible": {
      "clickableDateOption": {},
      "clickedDateChange": {},
      "newDateSelected": {},
      "newDateTitleSelected": {},
      "dateNotEligible": {}
    }
  }
};
  }
	init();
});