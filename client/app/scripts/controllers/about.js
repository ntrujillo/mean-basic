(function(angular){
	'use strict';
angular.module('votosApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                parent: 'site',
                url: '/about',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/views/about.html'                       
                    }
                }
            });
    });
}(window.angular));