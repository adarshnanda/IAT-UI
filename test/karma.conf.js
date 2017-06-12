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
    	client: {
      		mocha:{
        	timeout: 15000
      	}
    }
	});
};