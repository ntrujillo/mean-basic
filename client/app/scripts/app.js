(function (angular) {
	'use strict'
	var app = angular.module('votosApp', ['ui.bootstrap','ui.router','ngResource','angularUtils.directives.dirPagination']);

	app.run(['$rootScope','ENV','VERSION','TITLE',function($rootScope,ENV,VERSION,TITLE){
		$rootScope.ENV = ENV;
        $rootScope.VERSION = VERSION;
        $rootScope.TITLE = TITLE;

	}]);
	
	app.config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){

			$stateProvider.state('site',{
				'abstract': true,				
				views: {
                    'navbar@': {
                        templateUrl: 'app/views/navbar.html',
                        controller: 'NavbarController'
                    }
                }
			});
			
			$urlRouterProvider.otherwise('home');

	}]);
} (window.angular));