(function(angular){
	'use strict'
	angular.module('votosApp').controller('EntryCtrl',['$http','$state','$uibModal','generos','juntas','cantones','parroquias',
		function ($http, $state, $modal, generos, juntas, cantones, parroquias) {

		var ctrl = this;

		

	 function showModal() {
        var modalInstance = $modal.open({
          templateUrl: 'app/views/entry-dialog.html',
          controller: 'EntryDialogCtrl as ctrl',
          size: 'lg',
          backdrop: 'static',
          animation: true,
          resolve : {
          	entity : function(){
          		return {provincia : ctrl.selectedProvincia , canton : ctrl.selectedCanton, junta:ctrl.selectedJunta , genero:ctrl.selectedGenero}
          	},
          	listas : ['FactoryLista', function(service){
          		return service;
          	}]
          }
        });

        modalInstance.result.then(function(obj) {
          ctrl.result = obj;

        });
      };

      function getCantones(id_provincia) {
      	ctrl.cantones = cantones.getRegistrosByProvincia(id_provincia);
      }	

      function getJuntas(id_canton) {
      	ctrl.juntas = juntas.getRegistrosByCanton(id_canton);
      }		

      function getGeneros() {
      	ctrl.generos = generos.getRegistros();
      }	

		ctrl.showModal = showModal;		
		ctrl.getCantones = getCantones;
		ctrl.getJuntas = getJuntas;
		ctrl.getGeneros = getGeneros;		
		ctrl.parroquias = parroquias.getRegistros();		
	}]);

}(window.angular));