angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'index.html',
                controller : 'IndexCtrl'
            })
            .when('/details', {
                templateUrl : 'details.html',
                controller : 'DetailsCtrl'
            });
    }])
    .controller('IndexCtrl', ['$scope', function($scope) {
        
    } ])
    .controller('DetailsCtrl', ['$scope', function($scope) {
    
    }]);