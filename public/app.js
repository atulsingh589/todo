var app=angular.module("todo",['ngRoute','ngStorage']);
app.constant("$constant",{url:"http://localhost:8080/api/"})
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "html/login.html",
            controller:"loginCtrl"
        })
        .when("/todo", {
            templateUrl : "html/todo.html",
            controller:"todoCtrl"
        })
    $locationProvider.hashPrefix('');
});
app.run(function(){

});