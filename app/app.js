angular.module('myApp', ['ngRoute', 'ngAnimate'])
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
            .otherwise('/');
    }])
    .run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
        'use strict';
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/');
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
            $rootScope.isLoading = false;
            }, 1000);
        });
    }])
    .controller('HomeCtrl', ['$rootScope', function($rootScope) {
        
    } ])
    .controller('DetailsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.basemeal = ''
        $scope.taxrate = '';
        $scope.tipPercentage = '';
        $scope.tip =  0;
        $scope.subtotal = '';
        $scope.total = '';
        $rootScope.tiptotal = 0;
        $rootScope.meals = 0;
        $rootScope.avg = '';
        $scope.displayErrors = 'no';
        
        $scope.submit = function(){
            console.log($scope.basemeal);
            if ($scope.basemeal && $scope.taxrate && $scope.tipPercentage){
                $scope.subtotal = $scope.basemeal + ($scope.basemeal * ($scope.taxrate / 100));
                $scope.tip = $scope.basemeal * ($scope.tipPercentage / 100);
                $scope.total = $scope.subtotal + $scope.tip;
                addUp($scope.tip);
                
            }
            else {
                $scope.displayErrors = '';
            }
        };
        $scope.cancel = function(){
            $scope.basemeal = '';
            $scope.taxrate = '';
            $scope.tipPercentage = '';
        };
        var addUp = function(tip){
            $rootScope.meals += 1;
            $rootScope.tiptotal += tip;
            $rootScope.avg = $rootScope.tiptotal / $rootScope.meals;
            
            
        };

    }])
    .controller('EarnCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.meals = $rootScope.meals;
        $scope.tiptotal = $rootScope.tiptotal;
        $scope.avg = $rootScope.avg;
        
        $scope.reset = function(){
            console.log($rootScope.meals);
            
            $rootScope.meals = '';
            console.log($rootScope.meals);
            $rootScope.tiptotal = '';
            $rootScope.avg = '';
            $scope.meals = '';
            $scope.tiptotal = '';
            $scope.avg = '';
        };
        
    }]);