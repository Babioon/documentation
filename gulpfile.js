var gulp        = require('gulp');
var replace     = require('gulp-replace');
var insert      = require('gulp-insert');
var markdownpdf = require('gulp-markdown-pdf');
var markdown    = require('gulp-markdown');

//var marked = markdown.marked();
//var renderer = marked.Renderer();
//console.log('--------'); 
//console.log(renderer);

gulp.task('markdown', function () {
    return gulp.src('addphp/babioon-add-php.md')
        .pipe(markdown())
        .pipe(replace('<hr>', '</div><hr id="system-readmore" /><div class="fulltext">'))
        .pipe(replace(/<h([1,2,3,4,5,6])(.*?)>/g, '<h$1>'))
        .pipe(replace('<h6>', '<h7>'))
        .pipe(replace('<h5>', '<h6>'))
        .pipe(replace('<h4>', '<h5>'))
        .pipe(replace('<h3>', '<h4>'))
        .pipe(replace('<h2>', '<h3>'))
		.pipe(replace('<h1>', '<h2>'))
        .pipe(replace('</h6>', '</h7>'))
        .pipe(replace('</h5>', '</h6>'))
        .pipe(replace('</h4>', '</h5>'))
        .pipe(replace('</h3>', '</h4>'))
        .pipe(replace('</h2>', '</h3>'))
		.pipe(replace('</h1>', '</h2>'))
        .pipe(insert.wrap('<div class="introtext">', '</div>'))
        .pipe(gulp.dest('addphp'));
});

gulp.task('pdf', function () {
    return gulp.src('addphp/babioon-add-php.md')
        .pipe(markdownpdf())
        .pipe(gulp.dest('addphp'));
});

gulp.task('default', ['markdown', 'pdf']);
