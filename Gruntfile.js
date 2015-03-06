module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            },
            html: {
                files: ['index.html', 'demo.html', 'mqtt-message-detail-ui.html'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'mqtt-message-detail-ui.css': 'mqtt-message-detail-ui.scss'
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

    // a task that builds the overall app
    grunt.registerTask('build');

    grunt.registerTask('srv', ['build', 'connect', 'watch']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['build']);


};
