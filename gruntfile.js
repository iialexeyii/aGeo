module.exports = function(grunt) {



	grunt.initConfig({

		uglify: {
			js: {
				options: {
					banner: "/* Created by Art-Sites Studio art-sites.org */"
				},
				files: {
					'assets/jquery.geo.min.js': ['assets/jquery.geo.js']
				}
			}
		}

	});


	/*---------------------- Load components --------------------------*/

	grunt.loadNpmTasks("grunt-contrib-uglify");


	grunt.registerTask('default', ["uglify"]);



}