(function (angular) {
	'use strict'
	var app = angular.module('votosApp', ['ui.bootstrap','ui.router','pascalprecht.translate','satellizer','toastr','ngResource','angularUtils.directives.dirPagination']);

	app.run(['$rootScope','ENV','VERSION','TITLE',function($rootScope,ENV,VERSION,TITLE){
		$rootScope.ENV = ENV;
        $rootScope.VERSION = VERSION;
        $rootScope.TITLE = TITLE;

	}]);
	
	app.config(["$stateProvider","$urlRouterProvider","$authProvider","$translateProvider", "$translatePartialLoaderProvider",
	function($stateProvider, $urlRouterProvider,$authProvider, $translateProvider, $translatePartialLoaderProvider){

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

			$translateProvider.useLoader('$translatePartialLoader', {
			      urlTemplate: '/app/translation/{lang}/{part}.json'
			});

			$translateProvider.preferredLanguage('en-US');

			 $authProvider.facebook({
		      clientId: '657854390977827'
		    });

		    $authProvider.google({
		      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
		    });

	}]);
} (window.angular));