var gulp = require('gulp');


gulp.task( "copy", function () {
    gulp.src( "./common/output.js" )
        .pipe( gulp.dest( "./_desktop/js" ) )
        .pipe( gulp.dest( "./_web/js" ) );

    gulp.src( "./common/lib/**/*" )
        .pipe( gulp.dest( "./_desktop/lib" ) )
        .pipe( gulp.dest( "./_web/lib" ) );

    gulp.src( "./common/fonts/**/*" )
        .pipe( gulp.dest( "./_desktop/fonts" ) )
        .pipe( gulp.dest( "./_web/fonts" ) );
});

gulp.task( "default", ["copy"], function () {
    console.info("Copy task executed.");
});