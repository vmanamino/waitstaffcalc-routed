angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'index.html',
                controller : 'IndexCtrl'
            });
    }])
    .controller('IndexCtrl', ['$scope', function($scope) {
        
    } ]);