module.exports = function (grunt) {

	//npm tasks
	var npmTasks = ['grunt-contrib-clean','grunt-angular-templates','grunt-injector'];


	//grunt tasks
	var gruntTasks = ['clean', 'ngtemplates', 'injector'];

	var transformScript = function(replacement) {
  		return function(filePath) {
    		filePath = filePath.replace(replacement, '');
    		return '<script language="javascript" type="text/javascript" src="' + filePath + '"></script>';
  		};
	};
	var configJson = {
		pkg: grunt.file.readJSON('package.json'),
		clean: ['.tmp'],
		ngtemplates:{
			app:{
				src:'scripts/**/*.html',
				dest:'.tmp/templates.js'
			},
			options:{
				module:'iat',
				htmlmin:{
				    collapseWhitespace:true,
				    removeComments:true,
				    removeEmptyAttributes:true,
				    removeRedundantAttributes:true
				}
			}
		},
		injector: {
    		js: {
    			options: {
    				starttag:'<!-- injector:js -->',
	      			transform: transformScript('./'),
	      			template: 'index2.html'
    			},
			    files: {
			      'index2.html': ['scripts/**/*.js','bower_components/**/*.min.js','ExternalDependecies/**/lib/*.js']
			    }
  			}
  		}
	};

	

	//configure grunt
	grunt.initConfig(configJson);
	//register grunt tasks
	grunt.registerTask('serve', gruntTasks);

	//load npm tasks
	for(var index=0;index<npmTasks.length;index++){
		grunt.loadNpmTasks(npmTasks[index]);
	}


}