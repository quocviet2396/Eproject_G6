var app = angular.module("myAPP", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "homepage.html"
        })
        .when("/service", {
            templateUrl: "service.html"
        })
        .when("/signupin", {
            templateUrl: "signup-in.html"
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


// script signin-up
function f1() {

    let uid = document.getElementById("username").value.trim();

    if (uid.length == 0) {
        alert("Username cannot be blank, Please re-enter !");
        document.getElementById("username").focus();
        return false;
    }

    let pass = document.getElementById("pass").value.trim();
    let pass2 = document.getElementById("pass2").value.trim();
    if (pass != pass2) {
        alert("Password and Retype Password do not match!");
        document.getElementById("pass").focus();
        return false;
    }
    alert("Thanks for your register!");
}
