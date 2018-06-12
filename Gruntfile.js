module.exports = function (grunt) {

	//npm tasks
	var npmTasks = [
		'grunt-contrib-clean',
		'grunt-angular-templates',
		'grunt-injector',
		'grunt-contrib-copy',
		'grunt-contrib-concat',
		'grunt-karma'
		];


	//grunt tasks
	var serve = [
		'clean',
		'copy',
		'ngtemplates',
		'concat',
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
		karma:{
			unit:{
			    configFile: 'test/karma.conf.js',
			    background: false,
			    singleRun: true,
			    runnerPort: 9999,
			    reportSlowerThan: 100,
			    logLevel: 'INFO',
			    client: {
			      mocha:{
			        timeout: 180000
			      }
			    }
  			}
		},
		concat:{
			files:{
				src:'scripts/**/*.js',
				dest:'.tmp/concat/scripts.js'
			}
		},
		copy:{
			index:{
				src:'index.html',
				dest:'.tmp/index.html'
			},
			javascript:{
				src:'scripts/**/*.js',
				dest:'.tmp/'
			},
			externalJs:{
				src:'ExternalDependecies/dependencies/*.js',
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
				dest:'.tmp/concat/templates.js'
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
			      '.tmp/index.html': ['.tmp/concat/**/*.js']
			    }
  			},
  			Ed: {
    			options: {
    				starttag:'<!-- injector:Ed -->',
	      			transform: transformScript('/.tmp/'),
	      			template: '.tmp/index.html'
    			},
			    files: {
			      '.tmp/index.html': ['.tmp/ExternalDependecies/dependencies/**/*.js']
			    }
  			}
  		}
	};

	

	//configure grunt
	grunt.initConfig(configJson);
	//register grunt tasks
	grunt.registerTask('serve', serve);
	grunt.registerTask('test', ['serve', 'karma']);

	//load npm tasks
	for(var index=0;index<npmTasks.length;index++){
		grunt.loadNpmTasks(npmTasks[index]);
	}


}