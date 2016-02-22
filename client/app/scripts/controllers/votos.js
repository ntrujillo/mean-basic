(function(angular){
	'use strict';

angular.module('votosApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('votos', {
                parent: 'site',
                url: '/votos',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Conteo de Votos'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/views/votos.html',
                        controller: 'VotosCtrl as ctrl'
                    }
                }
            }).state('votos.detail', {
                parent: 'votos',
                url: '/{id}/detail',
                data: {
                    roles: ['ROLE_USER'],
                },views: {
                    'content@': {
                        templateUrl: 'app/views/votos-detail.html',
                        controller: 'VotosDetailCtrl'
                    }
                }
         
            });
    });
}(window.angular));
