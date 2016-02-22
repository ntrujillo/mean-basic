(function(angular) {
  'use strict'

  angular.module('votosApp').factory("FactoryGenero", function() {
    var service = {};
    var registros = [{
      code:1,
      name: "Hombres",
      description: "Junta Hombres"     
    },{code:2,
      name: "Mujeres",
      description: "Junta Mujeres"
    }]


    service.getRegistros = function() {
      return registros;
    }

    service.getRegistroById = function(code) {
      var tmp = undefined;
      for (var i = 0; i < registros.length; i++) {
        if (registros[i].code === code)
          tmp = registros[i];
      }
      return tmp;
    }


    return service;
  });

}(window.angular));