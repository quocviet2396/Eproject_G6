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
        })
        .when("/contactus", {
            templateUrl: "contactus.html"
        })
        .when("/aboutus", {
            templateUrl: "aboutus.html"
        })
        .when("/introduce", {
            templateUrl: "introduce.html"
        })
        .when("/go-karts", {
            templateUrl: "go_karts.html"
        })
        .when("/hollograves", {
            templateUrl: "hollograves.html"
        })
        .when("/runaway", {
            templateUrl: "runaway_rapids.html"
        })
        .when("/discounts", {
            templateUrl: "Discounts.html"
        })
        .when("/ticket", {
            templateUrl: "ticket.html"
        })
        .when("/buyticket", {
            templateUrl: "buyticket.html"
        })
        .when("/50-ticket", {
            templateUrl: "50_ticket.html"
        })
        .when("/100-ticket", {
            templateUrl: "100_ticket.html"
        })
        .when("/200-ticket", {
            templateUrl: "200_ticket.html"
        })
        .when("/3h-ticket", {
            templateUrl: "3h_ticket.html"
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


// signin-up page
//java login
function f1() {

    let uid = document.getElementById("username1").value.trim();

    if (uid.length == 0) {
        alert("Username cannot be blank, please do again !");
        document.getElementById("username1").focus();
        return false;
    }
    alert("Logged in successfully!");
}

//java register
function f2() {

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


//contactus page
// Check send message
function send() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value
    var message = document.getElementById("message").value;

    if (name == null || name == "") {
        alert(" At least let us know your name! ");
        return false;
    }

    if (email == null || email == "") {
        alert(" Enter your email so we can contact you. Example: group5@gmail.com");
        return false;
    }

    if (phone == null || phone == "") {
        alert("Enter your phone number so we can contact you.");
        return false;
    }

    if (message == null || message == "") {
        alert("Please enter your message.");
        return false;
    }
}

// AOS animation
AOS.init({
    duration: 3000,
    once: true,
});
document.querySelectorAll('img')
    .forEach((img) =>
        img.addEventListener('load', () =>
            AOS.refresh()
        )
    );


// Top up button
// Get the button
let mybutton = document.getElementById("top-up-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
