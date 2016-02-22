(function(angular){
	'use strict';

angular.module('votosApp')
    .controller('VotosCtrl',['RegistroResource', function (RegistroResource) {
    	var ctrl = this;
      	ctrl.registros = [];
        ctrl.pageno = 1;        
        ctrl.total_count = 0;
        ctrl.itemsPerPage = 5;

        function loadData(page) {
            RegistroResource.query({page: page, per_page: ctrl.itemsPerPage}, function(result, headers) {                
                ctrl.registros = result;
                ctrl.total_count = headers('X-Total-Count');
            });
        };


          

        function deleteRegistro(id) {
            RegistroResource.get({id: id}, function(result) {
                ctrl.registro = result;
                $('#deleteRegistroConfirmation').modal('show');
            });
        };

       function confirmDelete(id) {
            RegistroResource.delete({id: id},
                function () {
                    ctrl.loadAll();
                    $('#deleteRegistroConfirmation').modal('hide');                    
                });
        };

      	function refresh() {
            ctrl.loadData();          
        };      

        ctrl.refresh = refresh;       
        ctrl.confirmDelete = confirmDelete;
        ctrl.deleteRegistro = deleteRegistro;        
        ctrl.loadData = loadData;
        ctrl.loadData(ctrl.pageno);
    }]);
}(window.angular));