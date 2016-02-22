(function(angular){
	'use strict';
angular.module('votosApp').config(function ($stateProvider) {
        $stateProvider.state('entry', {
                parent: 'site',
                url: '/entry',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/views/entry.html',
                        controller: 'EntryCtrl as ctrl'
                    }
                },resolve : {
                    generos : ['FactoryGenero', function (service){
                        return service;
                    }],
                    juntas : ['FactoryJunta', function(service){
                        return service;
                    }],
                    cantones : ['FactoryCanton', function(service){
                        return service;
                    }],
                    parroquias : ['FactoryProvincia', function(service){
                        return service;
                    }]
                }
            });
    });
}(window.angular));