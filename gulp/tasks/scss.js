import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(
			sass({
				outputStyle: 'expanded',
			}),
		)
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoPrefixer({
					grid: 'false',
					overrideBrowserslist: ['last 5 versions'],
					cascade: false,
				}),
			),
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(
			rename({
				extname: '.min.css',
			}),
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream())
}
