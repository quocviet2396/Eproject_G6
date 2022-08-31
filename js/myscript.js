var app = angular.module("myAPP", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "homepage.html"
        })
        .when("/service", {
            templateUrl: "service.html"
        });
});

//Jump to element
function myFunction1() {
    const element = document.getElementById("gallery");
    element.scrollIntoView();
}
function myFunction2() {
    const element = document.getElementById("events");
    element.scrollIntoView();
}
function myFunction3() {
    const element = document.getElementById("parkmap");
    element.scrollIntoView();
}
function myFunction4() {
    const element = document.getElementById("restaurants");
    element.scrollIntoView();
}
