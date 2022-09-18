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
        .when("/cart", {
            templateUrl: "cart.html"
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

//order ticket
//dinh nghia bien ds o pham vi ung dung a
app.run(function ($rootScope, $http) {

    $http.get("pizza.json").then(function (response) {
        $rootScope.menu = response.data.menu;
        console.log($rootScope.menu);

    });

    $rootScope.cart = [];
    $rootScope.total = 0;
});


app.controller("productControl", function ($scope, $rootScope) {
    $scope.addCart = function (id) {
        var item = $rootScope.menu[id];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }
        var newEle = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle);
        console.log($rootScope.cart)
    }
    $scope.show = function (id) {
        console.log("ma: " + id);

        let data = $rootScope.menu;
        let product = data.find(v => v.id == id);

        $scope.name = product.name;
        $scope.price = product.price;
        $scope.description = product.description;
        $scope.image = product.image;
        console.log(product);

    }
});

app.controller("cartControl", function ($scope, $rootScope) {

    $scope.isShow = false;
    $scope.removeAll = function () {
        $rootScope.total = 0
        $rootScope.cart = [];
    }

    $scope.checkout = function () {
        if ($rootScope.cart.length > 0) {
            $scope.isShow = true;
        }
        else {
            $scope.isShow = false;
        }
    }

    $scope.thank = function () {
        alert("Thanks for your order !");
        $scope.isShow = false;
        $rootScope.total = 0
        $rootScope.cart = [];
    }
});

//top-up-btn
// Get the button
let mybutton = document.getElementById("top-up-btn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
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

//time on scroll btn
setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("timingbottom").innerHTML = d.toLocaleTimeString();
}

//luong truy cap
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;