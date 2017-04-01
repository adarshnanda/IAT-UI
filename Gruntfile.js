module.exports = function (grunt) {

	//npm tasks
	var npmTasks = ['grunt-contrib-clean','grunt-angular-templates'];

	//configure grunt
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['.tmp'],
		ngtemplates:{
			app:{
				src:'scripts/**/*.html',
				dest:'.tmp/templates.js'
			},
			options:{
				module:'iat-ui',
				htmlmin:{
				    collapseWhitespace:true,
				    removeComments:true,
				    removeEmptyAttributes:true,
				    removeRedundantAttributes:true
				}
			}
		}
	});
	grunt.registerTask('serve', ['clean', 'ngtemplates']);

	//load npm tasks
	for(var index=0;index<npmTasks.length;index++){
		grunt.loadNpmTasks(npmTasks[index]);
	}


}