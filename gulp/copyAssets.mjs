import gulp from 'gulp';
import {dist} from './constants.mjs';

const copySvg = () =>
  gulp.src('source/img/**/*.svg', {base: 'source'})
      .pipe(gulp.dest(dist));

const copyImages = () =>
  gulp.src('source/img/**/*.{png,jpg,webp}', {base: 'source'})
      .pipe(gulp.dest(dist));

const copy = () =>
  gulp.src([
    'source/**.html',
    'source/fonts/**',
    'source/img/**',
    'source/favicon/**'
  ], {
    base: 'source',
  })
      .pipe(gulp.dest(dist));

export {copy, copyImages, copySvg};
