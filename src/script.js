/// <reference path="angular.min.js" />

var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                      .when("/home", {
                          templateUrl: "./Templates/home.html",
                          controller:"homeController"
                      })
                     .when("/courses", {
                         templateUrl: "Templates/courses.html",
                         controller: "coursesController"
                     })
                     .when("/student", {
                         templateUrl: "Templates/student.html",
                         controller: "studentController"
                     })
                 })
                 .controller("homeController", function ($scope, $http) {
                     $scope.message = "Home Page";
                     $http({
                       method: 'GET',
                       url: '/getSuccess1'
                     }).then(function successCallback(response) {
                       console.log(response.data);
                       alert("Data Fetched from Server Successfully");
                     }, function errorCallback(response) {
                       console.log(response);
                     });
                 })
                 .controller("coursesController", function ($scope, $http) {
                     $scope.courses = ["C#", "Java","VB.NET","SQL server","ASP.NET"];
                     $http({
                       method: 'GET',
                       url: '/getSuccess2'
                     }).then(function successCallback(response) {
                       console.log(response.data);
                       alert("Data Fetched from Server Successfully");
                     }, function errorCallback(response) {
                       console.log(response);
                     });
                 })
                 .controller("studentController", function ($scope, $http) {
                     $http.get("getSuccess3")
                     .then(function (response) {
                         console.log(response.data);

                         alert("Data Fetched from Server Successfully");

                         //$scope.students = response.data.students;
                     });

                 })
