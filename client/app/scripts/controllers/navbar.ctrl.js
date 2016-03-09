(function(angular){
	'use strict';

angular.module('votosApp')
    .controller('NavbarController', ['$scope','$translate', '$translatePartialLoader',
    	function ($scope,$translate, $translatePartialLoader) {

    		$translatePartialLoader.addPart('global');
  			$translate.refresh();
        
    }]);
}(window.angular));