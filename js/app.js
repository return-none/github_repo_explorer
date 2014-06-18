var app = angular.module('myApp', ['ngGrid']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.languages = [];
    $scope.gridOptions = { data: 'languages' };
    $http.get("https://api.github.com/repos/angular/angular.js/languages").success(function(data) {
        $scope.languages = Object.keys(data).map(function(current) {
            return {
                name: current,
                size: data[current]
            };
        });
    });
});
