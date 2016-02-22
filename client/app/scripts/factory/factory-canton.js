(function(angular) {
  'use strict'

  angular.module('votosApp').factory("FactoryCanton", function() {
    var service = {};
    var registros = [{  _id:  1 ,code:  20115 ,name:'CAMILO PONCE ENRIQUEZ', id_provincia:  201 } ,
{ _id:  2 ,code:  20111 ,name:'CHORDELEG', id_provincia:  201 } ,
{ _id:  3 ,code:  20101 ,name:'CUENCA', id_provincia:  201 } ,
{ _id:  4 ,code:  20112 ,name:'EL PAN', id_provincia:  201 } ,
{ _id:  5 ,code:  20102 ,name:'GIRON', id_provincia:  201 } ,
{ _id:  6 ,code:  20114 ,name:'GUACHAPALA', id_provincia:  201 } ,
{ _id:  7 ,code:  20103 ,name:'GUALACEO', id_provincia:  201 } ,
{ _id:  8 ,code:  20104 ,name:'NABON', id_provincia:  201 } ,
{ _id:  9 ,code:  20110 ,name:'OﾥA', id_provincia:  201 } ,
{ _id:  10  ,code:  20105 ,name:'PAUTE', id_provincia:  201 } ,
{ _id:  11  ,code:  20106 ,name:'PUCARA', id_provincia:  201 } ,
{ _id:  12  ,code:  20107 ,name:'SAN FERNANDO', id_provincia:  201 } ,
{ _id:  13  ,code:  20108 ,name:'SANTA ISABEL (CHAGUARURCO)', id_provincia:  201 } ,
{ _id:  14  ,code:  20113 ,name:'SEVILLA DE ORO', id_provincia:  201 } ,
{ _id:  15  ,code:  20109 ,name:'SIGSIG', id_provincia:  201 } ,
{ _id:  16  ,code:  20206 ,name:'CALUMA', id_provincia:  202 } ,
{ _id:  17  ,code:  20202 ,name:'CHILLANES', id_provincia:  202 } ,
{ _id:  18  ,code:  20203 ,name:'CHIMBO', id_provincia:  202 } ,
{ _id:  19  ,code:  20204 ,name:'ECHEANDIA', id_provincia:  202 } ,
{ _id:  20  ,code:  20201 ,name:'GUARANDA', id_provincia:  202 } ,
{ _id:  21  ,code:  20207 ,name:'LAS NAVES', id_provincia:  202 } ,
{ _id:  22  ,code:  20205 ,name:'SAN MIGUEL', id_provincia:  202 } ,
{ _id:  23  ,code:  20301 ,name:'AZOGUES', id_provincia:  203 } ,
{ _id:  24  ,code:  20302 ,name:'BIBLIAN', id_provincia:  203 } ,
{ _id:  25  ,code:  20303 ,name:'CAﾥAR', id_provincia:  203 } ,
{ _id:  26  ,code:  20306 ,name:'DELEG', id_provincia:  203 } ,
{ _id:  27  ,code:  20305 ,name:'EL TAMBO', id_provincia:  203 } ,
{ _id:  28  ,code:  20304 ,name:'LA TRONCAL', id_provincia:  203 } ,
{ _id:  29  ,code:  20307 ,name:'SUSCAL', id_provincia:  203 } ,
{ _id:  30  ,code:  20402 ,name:'BOLIVAR', id_provincia:  204 } ,
{ _id:  31  ,code:  20403 ,name:'ESPEJO', id_provincia:  204 } ,
{ _id:  32  ,code:  20404 ,name:'MIRA (CHONTAHUASI)', id_provincia:  204 } ,
{ _id:  33  ,code:  20405 ,name:'MONTUFAR', id_provincia:  204 } ,
{ _id:  34  ,code:  20406 ,name:'SAN PEDRO DE HUACA', id_provincia:  204 } ,
{ _id:  35  ,code:  20401 ,name:'TULCAN', id_provincia:  204 } ,
{ _id:  36  ,code:  20502 ,name:'LA MANA', id_provincia:  205 } ,
{ _id:  37  ,code:  20501 ,name:'LATACUNGA', id_provincia:  205 } ,
{ _id:  38  ,code:  20503 ,name:'PANGUA', id_provincia:  205 } ,
{ _id:  39  ,code:  20504 ,name:'PUJILI', id_provincia:  205 } ,
{ _id:  40  ,code:  20505 ,name:'SALCEDO', id_provincia:  205 } ,
{ _id:  41  ,code:  20506 ,name:'SAQUISILI', id_provincia:  205 } ,
{ _id:  42  ,code:  20507 ,name:'SIGCHOS', id_provincia:  205 } ,
{ _id:  43  ,code:  20602 ,name:'ALAUSI', id_provincia:  206 } ,
{ _id:  44  ,code:  20604 ,name:'CHAMBO', id_provincia:  206 } ,
{ _id:  45  ,code:  20605 ,name:'CHUNCHI', id_provincia:  206 } ,
{ _id:  46  ,code:  20603 ,name:'COLTA', id_provincia:  206 } ,
{ _id:  47  ,code:  20610 ,name:'CUMANDA', id_provincia:  206 } ,
{ _id:  48  ,code:  20606 ,name:'GUAMOTE', id_provincia:  206 } ,
{ _id:  49  ,code:  20607 ,name:'GUANO', id_provincia:  206 } ,
{ _id:  50  ,code:  20608 ,name:'PALLATANGA', id_provincia:  206 } ,
{ _id:  51  ,code:  20609 ,name:'PENIPE', id_provincia:  206 } ,
{ _id:  52  ,code:  20601 ,name:'RIOBAMBA', id_provincia:  206 } ,
{ _id:  53  ,code:  10702 ,name:'ARENILLAS', id_provincia:  107 } ,
{ _id:  54  ,code:  10703 ,name:'ATAHUALPA', id_provincia:  107 } ,
{ _id:  55  ,code:  10704 ,name:'BALSAS', id_provincia:  107 } ,
{ _id:  56  ,code:  10705 ,name:'CHILLA', id_provincia:  107 } ,
{ _id:  57  ,code:  10706 ,name:'EL GUABO', id_provincia:  107 } ,
{ _id:  58  ,code:  10707 ,name:'HUAQUILLAS', id_provincia:  107 } ,
{ _id:  59  ,code:  10714 ,name:'LAS LAJAS', id_provincia:  107 } ,
{ _id:  60  ,code:  10701 ,name:'MACHALA', id_provincia:  107 } ,
{ _id:  61  ,code:  10708 ,name:'MARCABELI', id_provincia:  107 } ,
{ _id:  62  ,code:  10709 ,name:'PASAJE', id_provincia:  107 } ,
{ _id:  63  ,code:  10710 ,name:'PIﾥAS', id_provincia:  107 } ,
{ _id:  64  ,code:  10711 ,name:'PORTOVELO', id_provincia:  107 } ,
{ _id:  65  ,code:  10712 ,name:'SANTA ROSA', id_provincia:  107 } ,
{ _id:  66  ,code:  10713 ,name:'ZARUMA', id_provincia:  107 } ,
{ _id:  67  ,code:  10806 ,name:'ATACAMES', id_provincia:  108 } ,
{ _id:  68  ,code:  10802 ,name:'ELOY ALFARO', id_provincia:  108 } ,
{ _id:  69  ,code:  10801 ,name:'ESMERALDAS', id_provincia:  108 } ,
{ _id:  70  ,code:  10803 ,name:'MUISNE', id_provincia:  108 } ,
{ _id:  71  ,code:  10804 ,name:'QUININDE', id_provincia:  108 } ,
{ _id:  72  ,code:  10807 ,name:'RIOVERDE', id_provincia:  108 } ,
{ _id:  73  ,code:  10805 ,name:'SAN LORENZO', id_provincia:  108 } ,
{ _id:  74  ,code:  10902 ,name:'ALFREDO BAQUERIZO MORENO', id_provincia:  109 } ,
{ _id:  75  ,code:  10903 ,name:'BALAO', id_provincia:  109 } ,
{ _id:  76  ,code:  10904 ,name:'BALZAR', id_provincia:  109 } ,
{ _id:  77  ,code:  10905 ,name:'COLIMES', id_provincia:  109 } ,
{ _id:  78  ,code:  10923 ,name:'CORONEL MARCELINO MARIDUEﾥA', id_provincia:  109 } ,
{ _id:  79  ,code:  10906 ,name:'DAULE', id_provincia:  109 } ,
{ _id:  80  ,code:  10907 ,name:'DURAN', id_provincia:  109 } ,
{ _id:  81  ,code:  10908 ,name:'EL EMPALME', id_provincia:  109 } ,
{ _id:  82  ,code:  10909 ,name:'EL TRIUNFO', id_provincia:  109 } ,
{ _id:  83  ,code:  10927 ,name:'GENERAL ANTONIO ELIZALDE (BUCAY)', id_provincia:  109 } ,
{ _id:  84  ,code:  10901 ,name:'GUAYAQUIL', id_provincia:  109 } ,
{ _id:  85  ,code:  10928 ,name:'ISIDRO AYORA', id_provincia:  109 } ,
{ _id:  86  ,code:  10926 ,name:'LA LIBERTAD', id_provincia:  109 } ,
{ _id:  87  ,code:  10924 ,name:'LOMAS DE SARGENTILLO', id_provincia:  109 } ,
{ _id:  88  ,code:  10910 ,name:'MILAGRO', id_provincia:  109 } ,
{ _id:  89  ,code:  10911 ,name:'NARANJAL', id_provincia:  109 } ,
{ _id:  90  ,code:  10912 ,name:'NARANJITO', id_provincia:  109 } ,
{ _id:  91  ,code:  10925 ,name:'NOBOL (VICENTE PIEDRAHITA)', id_provincia:  109 } ,
{ _id:  92  ,code:  10913 ,name:'PALESTINA', id_provincia:  109 } ,
{ _id:  93  ,code:  10921 ,name:'PLAYAS (GENERAL VILLAMIL)', id_provincia:  109 } ,
{ _id:  94  ,code:  10915 ,name:'SALINAS', id_provincia:  109 } ,
{ _id:  95  ,code:  10916 ,name:'SAMBORONDON', id_provincia:  109 } ,
{ _id:  96  ,code:  10920 ,name:'SAN JACINTO DE YAGUACHI', id_provincia:  109 } ,
{ _id:  97  ,code:  10917 ,name:'SANTA ELENA', id_provincia:  109 } ,
{ _id:  98  ,code:  10918 ,name:'SANTA LUCIA', id_provincia:  109 } ,
{ _id:  99  ,code:  10922 ,name:'SIMON BOLIVAR', id_provincia:  109 } ,
{ _id:  100 ,code:  10919 ,name:'URBINA JADO', id_provincia:  109 } ,
{ _id:  101 ,code:  21002 ,name:'ANTONIO ANTE', id_provincia:  210 } ,
{ _id:  102 ,code:  21003 ,name:'COTACACHI', id_provincia:  210 } ,
{ _id:  103 ,code:  21001 ,name:'IBARRA', id_provincia:  210 } ,
{ _id:  104 ,code:  21004 ,name:'OTAVALO', id_provincia:  210 } ,
{ _id:  105 ,code:  21005 ,name:'PIMAMPIRO', id_provincia:  210 } ,
{ _id:  106 ,code:  21006 ,name:'SAN MIGUEL DE URCUQUI', id_provincia:  210 } ,
{ _id:  107 ,code:  21102 ,name:'CALVAS', id_provincia:  211 } ,
{ _id:  108 ,code:  21103 ,name:'CATAMAYO', id_provincia:  211 } ,
{ _id:  109 ,code:  21104 ,name:'CELICA', id_provincia:  211 } ,
{ _id:  110 ,code:  21105 ,name:'CHAGUARPAMBA', id_provincia:  211 } ,
{ _id:  111 ,code:  21106 ,name:'ESPINDOLA', id_provincia:  211 } ,
{ _id:  112 ,code:  21107 ,name:'GONZANAMA', id_provincia:  211 } ,
{ _id:  113 ,code:  21101 ,name:'LOJA', id_provincia:  211 } ,
{ _id:  114 ,code:  21108 ,name:'MACARA', id_provincia:  211 } ,
{ _id:  115 ,code:  21116 ,name:'OLMEDO', id_provincia:  211 } ,
{ _id:  116 ,code:  21109 ,name:'PALTAS', id_provincia:  211 } ,
{ _id:  117 ,code:  21114 ,name:'PINDAL', id_provincia:  211 } ,
{ _id:  118 ,code:  21110 ,name:'PUYANGO', id_provincia:  211 } ,
{ _id:  119 ,code:  21115 ,name:'QUILANGA', id_provincia:  211 } ,
{ _id:  120 ,code:  21111 ,name:'SARAGURO', id_provincia:  211 } ,
{ _id:  121 ,code:  21112 ,name:'SOZORANGA', id_provincia:  211 } ,
{ _id:  122 ,code:  21113 ,name:'ZAPOTILLO', id_provincia:  211 } ,
{ _id:  123 ,code:  11202 ,name:'BABA', id_provincia:  112 } ,
{ _id:  124 ,code:  11201 ,name:'BABAHOYO', id_provincia:  112 } ,
{ _id:  125 ,code:  11210 ,name:'BUENA FE', id_provincia:  112 } ,
{ _id:  126 ,code:  11212 ,name:'MOCACHE', id_provincia:  112 } ,
{ _id:  127 ,code:  11203 ,name:'MONTALVO', id_provincia:  112 } ,
{ _id:  128 ,code:  11209 ,name:'PALENQUE', id_provincia:  112 } ,
{ _id:  129 ,code:  11204 ,name:'PUEBLO VIEJO', id_provincia:  112 } ,
{ _id:  130 ,code:  11205 ,name:'QUEVEDO', id_provincia:  112 } ,
{ _id:  131 ,code:  11206 ,name:'URDANETE', id_provincia:  112 } ,
{ _id:  132 ,code:  11211 ,name:'VALENCIA', id_provincia:  112 } ,
{ _id:  133 ,code:  11207 ,name:'VENTANAS', id_provincia:  112 } ,
{ _id:  134 ,code:  11208 ,name:'VINCES', id_provincia:  112 } ,
{ _id:  135 ,code:  11316 ,name:'24 DE MAYO', id_provincia:  113 } ,
{ _id:  136 ,code:  11302 ,name:'BOLIVAR', id_provincia:  113 } ,
{ _id:  137 ,code:  11303 ,name:'CHONE', id_provincia:  113 } ,
{ _id:  138 ,code:  11304 ,name:'EL CARMEN', id_provincia:  113 } ,
{ _id:  139 ,code:  11305 ,name:'FLAVIO ALFARO', id_provincia:  113 } ,
{ _id:  140 ,code:  11320 ,name:'JAMA', id_provincia:  113 } ,
{ _id:  141 ,code:  11321 ,name:'JARAMIJO', id_provincia:  113 } ,
{ _id:  142 ,code:  11306 ,name:'JIPIJAPA', id_provincia:  113 } ,
{ _id:  143 ,code:  11307 ,name:'JUNIN', id_provincia:  113 } ,
{ _id:  144 ,code:  11308 ,name:'MANTA', id_provincia:  113 } ,
{ _id:  145 ,code:  11309 ,name:'MONTECRISTI', id_provincia:  113 } ,
{ _id:  146 ,code:  11318 ,name:'OLMEDO', id_provincia:  113 } ,
{ _id:  147 ,code:  11310 ,name:'PAJAN', id_provincia:  113 } ,
{ _id:  148 ,code:  11317 ,name:'PEDERNALES', id_provincia:  113 } ,
{ _id:  149 ,code:  11311 ,name:'PICHINCHA', id_provincia:  113 } ,
{ _id:  150 ,code:  11301 ,name:'PORTOVIEJO', id_provincia:  113 } ,
{ _id:  151 ,code:  11319 ,name:'PUERTO LOPEZ', id_provincia:  113 } ,
{ _id:  152 ,code:  11312 ,name:'ROCAFUERTE', id_provincia:  113 } ,
{ _id:  153 ,code:  11322 ,name:'SAN VICENTE', id_provincia:  113 } ,
{ _id:  154 ,code:  11313 ,name:'SANTA ANA', id_provincia:  113 } ,
{ _id:  155 ,code:  11314 ,name:'SUCRE', id_provincia:  113 } ,
{ _id:  156 ,code:  11315 ,name:'TOSAGUA', id_provincia:  113 } ,
{ _id:  157 ,code:  31402 ,name:'GUALAQUIZA', id_provincia:  314 } ,
{ _id:  158 ,code:  31407 ,name:'HUAMBOYA', id_provincia:  314 } ,
{ _id:  159 ,code:  31403 ,name:'LIMON - INDANZA', id_provincia:  314 } ,
{ _id:  160 ,code:  31410 ,name:'LOGROﾥO', id_provincia:  314 } ,
{ _id:  161 ,code:  31401 ,name:'MORONA', id_provincia:  314 } ,
{ _id:  162 ,code:  31411 ,name:'PABLO VI', id_provincia:  314 } ,
{ _id:  163 ,code:  31404 ,name:'PALORA', id_provincia:  314 } ,
{ _id:  164 ,code:  31408 ,name:'SAN JUAN DON BOSCO', id_provincia:  314 } ,
{ _id:  165 ,code:  31405 ,name:'SANTIAGO', id_provincia:  314 } ,
{ _id:  166 ,code:  31406 ,name:'SUCUA', id_provincia:  314 } ,
{ _id:  167 ,code:  31409 ,name:'TAISHA', id_provincia:  314 } ,
{ _id:  168 ,code:  31412 ,name:'TIWINTZA', id_provincia:  314 } ,
{ _id:  169 ,code:  31503 ,name:'ARCHIDONA', id_provincia:  315 } ,
{ _id:  170 ,code:  31509 ,name:'CARLOS JULIO AROSEMENA T.', id_provincia:  315 } ,
{ _id:  171 ,code:  31504 ,name:'EL CHACO', id_provincia:  315 } ,
{ _id:  172 ,code:  31507 ,name:'QUIJOS', id_provincia:  315 } ,
{ _id:  173 ,code:  31501 ,name:'TENA', id_provincia:  315 } ,
{ _id:  174 ,code:  31604 ,name:'ARAJUNO', id_provincia:  316 } ,
{ _id:  175 ,code:  31602 ,name:'MERA', id_provincia:  316 } ,
{ _id:  176 ,code:  31601 ,name:'PASTAZA', id_provincia:  316 } ,
{ _id:  177 ,code:  31603 ,name:'SANTA CLARA', id_provincia:  316 } ,
{ _id:  178 ,code:  21702 ,name:'CAYAMBE', id_provincia:  217 } ,
{ _id:  179 ,code:  21703 ,name:'MEJIA', id_provincia:  217 } ,
{ _id:  180 ,code:  21704 ,name:'PEDRO MONCAYO', id_provincia:  217 } ,
{ _id:  181 ,code:  21708 ,name:'PEDRO VICENTE MALDONADO', id_provincia:  217 } ,
{ _id:  182 ,code:  21709 ,name:'PUERTO QUITO', id_provincia:  217 } ,
{ _id:  183 ,code:  21701 ,name:'QUITO', id_provincia:  217 } ,
{ _id:  184 ,code:  21705 ,name:'RUMIﾥAHUI', id_provincia:  217 } ,
{ _id:  185 ,code:  21707 ,name:'SAN MIGUEL DE LOS BANCOS', id_provincia:  217 } ,
{ _id:  186 ,code:  21706 ,name:'SANTO DOMINGO DE LOS COLORADOS', id_provincia:  217 } ,
{ _id:  187 ,code:  12401 ,name:'SANTA ELENA', id_provincia:  124 } ,
{ _id:  188 ,code:  12402 ,name:'LA LIBERTAD', id_provincia:  124 } ,
{ _id:  189 ,code:  12403 ,name:'SALINAS', id_provincia:  124 } ,
{ _id:  190 ,code:  22301 ,name:'SANTO DOMINGO', id_provincia:  223 } ,
{ _id:  191 ,code:  21801 ,name:'AMBATO', id_provincia:  218 } ,
{ _id:  192 ,code:  21802 ,name:'BAﾥOS DE AGUA SANTA', id_provincia:  218 } ,
{ _id:  193 ,code:  21803 ,name:'CEVALLOS', id_provincia:  218 } ,
{ _id:  194 ,code:  21804 ,name:'MOCHA', id_provincia:  218 } ,
{ _id:  195 ,code:  21805 ,name:'PATATE', id_provincia:  218 } ,
{ _id:  196 ,code:  21806 ,name:'QUERO', id_provincia:  218 } ,
{ _id:  197 ,code:  21807 ,name:'SAN PEDRO DE PELILEO', id_provincia:  218 } ,
{ _id:  198 ,code:  21808 ,name:'SANTIAGO DE PILLARO', id_provincia:  218 } ,
{ _id:  199 ,code:  21809 ,name:'TISALEO', id_provincia:  218 } ,
{ _id:  200 ,code:  31907 ,name:'CENTINELA DEL CONDOR', id_provincia:  319 } ,
{ _id:  201 ,code:  31902 ,name:'CHINCHIPE', id_provincia:  319 } ,
{ _id:  202 ,code:  31906 ,name:'EL PANGUI', id_provincia:  319 } ,
{ _id:  203 ,code:  31903 ,name:'NANGARITZA', id_provincia:  319 } ,
{ _id:  204 ,code:  31908 ,name:'PALANDA', id_provincia:  319 } ,
{ _id:  205 ,code:  31909 ,name:'PAQUISHA', id_provincia:  319 } ,
{ _id:  206 ,code:  31904 ,name:'YACUAMBI', id_provincia:  319 } ,
{ _id:  207 ,code:  31905 ,name:'YANZATZA', id_provincia:  319 } ,
{ _id:  208 ,code:  31901 ,name:'ZAMORA', id_provincia:  319 } ,
{ _id:  209 ,code:  42002 ,name:'ISABELA', id_provincia:  420 } ,
{ _id:  210 ,code:  42001 ,name:'SAN CRISTOBAL', id_provincia:  420 } ,
{ _id:  211 ,code:  42003 ,name:'SANTA CRUZ', id_provincia:  420 } ,
{ _id:  212 ,code:  32106 ,name:'CASCALES', id_provincia:  321 } ,
{ _id:  213 ,code:  32107 ,name:'CUYABENO', id_provincia:  321 } ,
{ _id:  214 ,code:  32102 ,name:'GONZALO PIZARRO', id_provincia:  321 } ,
{ _id:  215 ,code:  32101 ,name:'LAGO AGRIO', id_provincia:  321 } ,
{ _id:  216 ,code:  32103 ,name:'PUTUMAYO', id_provincia:  321 } ,
{ _id:  217 ,code:  32104 ,name:'SHUSHUFINDI', id_provincia:  321 } ,
{ _id:  218 ,code:  32105 ,name:'SUCUMBIOS', id_provincia:  321 } ,
{ _id:  219 ,code:  32202 ,name:'AGUARICO', id_provincia:  322 } ,
{ _id:  220 ,code:  32203 ,name:'LA JOYA DE LOS SACHAS', id_provincia:  322 } ,
{ _id:  221 ,code:  32204 ,name:'LORETO', id_provincia:  322 } ,
{ _id:  222 ,code:  32201 ,name:'ORELLANA', id_provincia:  322 } 
];


    service.getRegistros = function() {
      return registros;
    }

    service.getRegistroById = function(code) {
      var tmp = undefined;
      for (var i = 0; i < registros.length; i++) {
        if (registros[i].code=== code)
          tmp = registros[i];
      }
      return tmp;
    }

    service.getRegistrosByProvincia = function(idProvincia) {
      var tmp = [];
      for (var i = 0; i < registros.length; i++) {
        if (registros[i].id_provincia === idProvincia)
          tmp.push(registros[i]);
        
      }
      return tmp;
    }


    return service;
  });

}(window.angular));