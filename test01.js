
var m1 = angular.module('myApp', []);
m1.controller('controller1', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.arr = [1,45,12,109,56,23];
});
m1.filter('plusFun', function() {
    return function(val, num, num2) {
        let result = val>25?'大':'小';
	    return result+''+num+''+num2
	}
});