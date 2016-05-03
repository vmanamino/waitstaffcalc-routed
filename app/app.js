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
        $rootScope.meals;
        $rootScope.tiptotal;
        rootScope.avg;
        
        $scope.reset = function(){
            $rootScope.meals = '';
            $rootScope.tiptotal = '';
            $rootScope.avg = '';
        };
        
    }]);