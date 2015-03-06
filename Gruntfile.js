module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['style/*.scss'],
                tasks: ['sass'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            },
            html: {
                files: ['index.html'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'build/css/main.css': 'style/main.scss',
                    'build/css/element.css': 'style/element.scss'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            }
        }


    });


    // a task that creates the initial folder structure and copies some dependencies
    grunt.registerTask('init');

    // a task that builds the overall app
    grunt.registerTask('build');

    grunt.registerTask('srv', ['connect', 'watch']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Default task(s).
    grunt.registerTask('default', ['build']);


};
