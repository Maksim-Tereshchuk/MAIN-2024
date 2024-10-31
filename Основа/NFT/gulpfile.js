const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglife = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");

const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

const newer = require("gulp-newer");

function images() {
  return src(["app/images/src/*.*", "!app/images/src/*.svg"])
    .pipe(newer("app/images/dist"))

    .pipe(src("app/images/src/*.*"))
    .pipe(newer("app/images/dist"))
    .pipe(webp())

    .pipe(src("app/images/src/*.*"))
    .pipe(newer("app/images/dist"))
    .pipe(imagemin())

    .pipe(dest("app/images/dist"));
}

function script() {
  return src([
    "node_modules/swiper/swiper-bundle.js",

    "node_modules/mixitup/dist/mixitup.js",
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglife())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/style.scss")
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
  watch(["app/scss/style.scss"], styles);
  watch(["app/js/main.js"], script);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

// Выгрузка всего в dist 'Когда завершил проект'
function cleanDist() {
  return src("dist").pipe(clean());
}

function building() {
  return src(["app/css/style.min.css", "app/js/main.min.js", "app/**/*.html"], {
    base: "app",
  }).pipe(dest("dist"));
}
// ==============================================

exports.styles = styles;
exports.script = script;
exports.watching = watching;
exports.images = images;

exports.build = series(cleanDist, building);

exports.default = parallel(styles, images, script, watching);
