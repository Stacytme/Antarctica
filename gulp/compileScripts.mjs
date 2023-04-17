import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config.cjs';
import {dist} from './constants.mjs';

const compileScripts = () =>
  gulp.src(['source/js/main.js'])
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest(`${dist}/js`));

export default compileScripts;
