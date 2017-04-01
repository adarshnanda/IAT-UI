module.exports = function (grunt) {

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

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-angular-templates');

}