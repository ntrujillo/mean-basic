(function(angular){
	'use strict';
angular.module('votosApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/home',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/views/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            });
    });
}(window.angular));