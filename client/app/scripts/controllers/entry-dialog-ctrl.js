(function(angular){
	'use strict'

	angular.module('votosApp').controller('EntryDialogCtrl',['$state','$uibModalInstance','entity', 'listas', 'FactoryJunta','RegistroResource', 
		function ($state,$modalInstance,entity, listas, juntaSrv,resgistroSrv) {
		var ctrl = this;        

		function clear() {
            $modalInstance.dismiss('cancel');
        };

        function sum(){
        	ctrl.totalVotos = 0;
        	ctrl.listas.forEach(function(item){
        		ctrl.totalVotos += item.votos;
        	});
        }

        function save(){
            var reg = {
                "junta" : entity.junta,
                "genero" : entity.genero,
                "validos" : ctrl.totalVotos,
                "blancos": ctrl.totalBlancos,
                "nulos" : ctrl.totalNulos
            };
          
            resgistroSrv.save(reg, onSaveFinished);
            
        }       

        function onSaveFinished(result) {           
            $modalInstance.close(result);
        };      
       

        ctrl.clear = clear;
        ctrl.listas = listas.getRegistros();
        ctrl.entity = entity;
        ctrl.junta = juntaSrv.getRegistroById(entity.junta);
        ctrl.save = save;
        ctrl.sum = sum;
        sum();

	}]);

	
}(window.angular));