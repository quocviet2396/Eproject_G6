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
document.getElementById("register").onsubmit = function () {

    //1. kiem tra o nhap email co dung chuan ko?
    let email = document.getElementById("email").value.trim().toLowerCase();


    //1a. bieu thuc qui tac (regular exp kiem tra email)
    let r = /([a-z0-9_]+)@([a-z0-9]+)\.([a-z]{2,4})+/;

    //1b. kiem tra du lieu trong nhap email co khop voi bieu thuc r?
    if (r.test(email) == false) {
        alert("Email ko hop le. Vui long nhap lai !!!");
        document.getElementById("email").focus();
        return false;
    }
    //ket thuc kiem tra o nhap email co dung chuan ko?


    //2. kiem tra password va password confirm co giong nhau ko
    let pass1 = document.getElementById("pass").value.trim();
    let pass2 = document.getElementById("pass2").value.trim();

    if (pass1 != pass2) {
        alert("Mat khau va Mat Khau nhap lai ko giong nhau ! Vui long nhap lai !");
        document.getElementById("pass").focus();
        return false;
    }
    
}
