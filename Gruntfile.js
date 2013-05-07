module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    "regex-check": {
        files: ["src/**/*.js", "src2/*.js"],
        options: {
            excluded : ["src/**/*xcluded.js", 'src2/shouldBeExcluded.js'],
            pattern : /console/g
        }
    }
  });

  grunt.loadNpmTasks('grunt-regex-check');
  grunt.registerTask('default', ["regex-check"]);
};
