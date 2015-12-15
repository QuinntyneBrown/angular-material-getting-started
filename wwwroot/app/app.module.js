angular.module("app", ["ngX", "ngRoute", "ngMaterial"]).config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        componentName: "homeComponent"
    });

    $routeProvider.when("/about", {
        componentName: "aboutComponent"
    });
}]);