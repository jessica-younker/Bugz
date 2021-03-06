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
    when("/news", {
        templateUrl: "partials/news.html",
        controller: "NewsCtrl"
    }).
    when("/graph", {
        templateUrl: "partials/graph.html",
        controller: "GraphCtrl"
    }).
    when("/success", {
        templateUrl: "partials/success.html",
        controller: "SuccessCtrl"
    }).
    otherwise("/");
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