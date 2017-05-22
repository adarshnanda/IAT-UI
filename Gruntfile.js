module.exports = function (grunt) {

	//npm tasks
	var npmTasks = [
		'grunt-contrib-clean',
		'grunt-angular-templates',
		'grunt-injector',
		'grunt-contrib-copy'
		];


	//grunt tasks
	var gruntTasks = [
		'clean',
		'copy',
		'ngtemplates',
		'injector'
		];
	//inject scripts
	var transformScript = function(replacement) {
  		return function(filePath) {
    		filePath = filePath.replace(replacement, '');
    		return '<script language="javascript" type="text/javascript" src="' + filePath + '"></script>';
  		};
	};
	var configJson = {
		pkg: grunt.file.readJSON('package.json'),
		copy:{
			index:{
				src:'index.html',
				dest:'.tmp/index.html'
			},
			javascript:{
				src:'scripts/**/*.js',
				dest:'.tmp/'
			},
			css:{
				src:'styles/**/*.css',
				dest:'.tmp/'
			}
		},
		clean: ['.tmp'],
		ngtemplates:{
			app:{
				src:'scripts/**/*.html',
				dest:'.tmp/scripts/templates.js'
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
	      			transform: transformScript('/.tmp/'),
	      			template: '.tmp/index.html'
    			},
			    files: {
			      '.tmp/index.html': ['.tmp/scripts/**/*.js']
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