var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  var records = [
    {name:"Ben", dateOfBirth: new Date("November 23 1980") , gender: "Male", Salary:"55000"},
    {name:"Rahul", dateOfBirth: new Date("October 15 1985") , gender: "Male", Salary:"65000"},
    ];
    $scope.records =records;
});