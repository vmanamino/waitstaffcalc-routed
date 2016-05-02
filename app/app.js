angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'home.html',
                controller : 'HomeCtrl'
            })
            .when('/details', {
                templateUrl : 'details.html',
                controller : 'DetailsCtrl'
            })
            .when('/earnings', {
                templateUrl : 'earnings.html',
                controller : 'EarnCtrl'
            })
            .when('/error', {
                template : '<p>Error - Page Not Found</p>'
            })
            .otherwise('/error');
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        'use strict';
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        
    } ])
    .controller('DetailsCtrl', ['$scope', function($scope) {
    
    }])
    .controller('EarnCtrl', ['$scope', function($scope) {
        
    }]);