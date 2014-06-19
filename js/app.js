var app = angular.module('myApp', ['ngGrid', 'angularCharts']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.loaded = false;
    $scope.languages_table = [];
    $scope.languages_chart = [];

    $scope.gridOptions = { data: 'languages_table' };
    $scope.languages_chart_config = {
        legend: {
            display: true,
            position: 'right'
        }
    };

    $http.get("https://api.github.com/repos/angular/angular.js/languages").success(function(data) {
        $scope.languages_table = Object.keys(data).map(function(current) {
            return {
                name: current,
                size: data[current]
            };
        });
        $scope.languages_chart = {
            data: $scope.languages_table.map(function(item) {
                return { x: item.name, y: [item.size] };
            })
        };
        $scope.loaded = true;
    });
});
