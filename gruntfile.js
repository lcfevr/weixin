/**
 * Created by Administrator on 2016/5/18 0018.
 */
/**
 * Created by Administrator on 2016/5/16 0016.
 */
/**
 * Created by Administrator on 2016/1/13.
 */
module.exports=function(grunt){
    grunt.initConfig({
        watch:{
            html:{
                files:['css/**','js/**','*.html','*.js'],
                options:{
                    livereload:true
                }
            },
            js:{
                files:['app.js'],
                tasks:['jshint'],
                options:{
                    livereload:true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    args: [],
                    nodeArgs: ['--debug'],
                    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
                    ext: 'js',
                    watch: ['./'],
                    delay: 1,
                    env: {
                        PORT: '80'
                    },
                    cwd: __dirname
                }
            }
        },
        jshint:{
            build:['gruntfile.js','app.js','js/*.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        },
        //uglify:{
        //    options:{
        //        stripBanners:true,
        //        banner:'test.js'
        //    },
        //    build:{
        //        src:'js/testUglify.js',
        //        dest:'build/testUglify.min.js'
        //    }
        //},
        concurrent:{
            tasks:['watch','nodemon','jshint'],
            options:{
                logConcurrentOutput:true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.option('force',true);
    grunt.registerTask('default',['concurrent']);
};