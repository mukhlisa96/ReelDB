var app = angular.module('reelDb', []);

app.controller('MoviesController', function ($scope, $http) {
    $http.get('https://api.myjson.com/bins/17k0ay')
        .then(function (res) {
            $scope.movies = res.data;
        });
});