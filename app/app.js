// apiKey: "AIzaSyDA6Kvb42gybEpW4JqK2JRi9DPWzDkqfZw"
// databaseURL: https://flower-power-angular.firebaseio.com
"use strict";

console.log("app.js is on deck");

var app = angular.module("FlowerApp", ["ngRoute"])
.constant('FirebaseURL','https://flower-power-angular.firebaseio.com/');

app.config(function($routeProvider){


    $routeProvider.
        when("/flowers", {
            templateUrl: "partials/listFlowers.html",
            controller: "ListFlowersCtrl"
        }).

        otherwise("/flowers");
});


app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
