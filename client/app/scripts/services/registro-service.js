(function(angular){
	'use strict';

angular.module('votosApp')
    .factory('RegistroResource', function ($resource, DateUtils) {
        return $resource('api/registro/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
}(window.angular));