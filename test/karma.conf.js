module.exports = function (config) {
	config.set({
    	basePath: '..',
    	frameworks: ['mocha', 'chai'],
    	files: [
      		'bower_components/angular/angular.js',
      		'test/unit/**/*.js',
      		'.tmp/scripts/**/*.js'
    	],
    	browsers: [process.env['browser'] || 'Chrome'],
    	singleRun: false,
   		browserNoActivityTimeout: 100000,
   		preprocessors: {
      		'.tmp/scripts/**/*.js': 'coverage'
   		},
    	reporters: process.env['REPORTERS'] || ['coverage'],
    	coverageReporter: {
      		type: 'lcov',
      		dir: '.tmp/report/coverage-report/'
    	},
    	plugins: [
  			'karma-coverage',
  			'karma-chrome-launcher',
  			'karma-mocha',
  			'karma-chai',
  			'karma-sinon'
		],
    	client: {
      		mocha:{
        	timeout: 15000
      	}
    }
	});
};