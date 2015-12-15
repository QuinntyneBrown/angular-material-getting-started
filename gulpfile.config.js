'use strict';

var GulpConfig = (function () {

    function GulpConfig() {
        this.source = './wwwroot/';
        this.allJavaScript = this.source + '/**/*.js';
        this.allFiles = this.source + '/**/*.js';

        this.paths = {
            npm: './node_modules/',
            bower: './bower_components/',
            lib: './lib/'
        };

        this.libs = [
            this.paths.bower + 'angular-material/angular-material.js',
            this.paths.npm + 'angular/angular.js',
            this.paths.npm + 'angular-aria/angular-aria.js',
            this.paths.npm + 'angular-animate/angular-animate.js',
            this.paths.npm + 'angular-route/angular-route.js',
            this.paths.npm + 'jquery/dist/jquery.js',
            this.paths.npm + 'ng-x/dist/ngX.js'
        ];
    }

    return GulpConfig;
})();

module.exports = GulpConfig;