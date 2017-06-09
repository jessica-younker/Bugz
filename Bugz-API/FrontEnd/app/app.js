"use strict";

var app = angular.module("Bugz", ["ngRoute", "base64"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
        if (userExists){
            resolve();
        }else {
            reject();
        }
    });
});

app.config(function($routeProvider){
    $routeProvider.
    when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    }).
    when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    }).
    otherwise("/login");
});

// app.run(($location, FBCreds) => {
//     let creds = FBCreds;
//     let authConfig = {
//         apiKey: creds.apiKey,
//         authDomain: creds.authDomain,
//         databaseURL: creds.databaseURL
//     };
//     firebase.initializeApp(authConfig);
// });