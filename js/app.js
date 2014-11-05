var app = angular.module('githubExplorer', ['angularCharts']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.loaded = false;

    $scope.languages_chart = {};
    $scope.languages_chart_config = {
        legend: {
            display: true,
            position: 'right'
        }
    };

    $scope.languages_table = {
        order: 'name',
        reverse: false,
        data: []
    };

    $http.get("https://api.github.com/repos/angular/angular.js/languages").success(function (response) {
        $scope.languages_chart.data = Object.keys(response).map(function (key) {
            return {x: key, y: [response[key]]}
        });

        $scope.languages_table.data = Object.keys(response).map(function (key) {
            return {
                name: key,
                size: response[key]
            };
        });

        $scope.loaded = true;
    });
});
