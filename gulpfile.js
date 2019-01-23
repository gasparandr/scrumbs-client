var gulp = require( "gulp" );


gulp.task( "copy", function () {

    gulp.src( "./src/_style/fonts/**/*" )
        .pipe( gulp.dest( "./dist/fonts" ) );

});

gulp.task( "default", ["copy"], function () {
    console.info("Copy task executed.");
});