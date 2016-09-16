(function () {
    'use strict';

    angular.module('LunchCheckerApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
    $scope.click = function () {
        var inputString;
        var outputString;
        var arrayOfStrings;
        if ($scope.input) {
            inputString = $scope.input;
            arrayOfStrings = inputString.split(',');
            if (arrayOfStrings.length <= 3) {
                outputString = "Enjoy!"
            }
            if (arrayOfStrings.length > 3) {
                outputString = "Too much!"
            }
        } else {outputString = "Please enter data first";}
        $scope.output = outputString;
    }
    }
})();