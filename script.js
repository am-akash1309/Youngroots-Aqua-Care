const myapp = angular.module("myapp",['ui.router'])

myapp.controller("bot1", function($scope, $state, $http, $document) {
    $document.ready(function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    });
});


myapp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("main",{
        url: "/",
        templateUrl:"home.html",
        controller: "bot1"
    })
    $urlRouterProvider.otherwise("/")
})