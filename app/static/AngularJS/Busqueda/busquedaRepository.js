﻿var searchUrl = global_settings.urlCORS + '/api/flotillaApi/';

registrationModule.factory('busquedaRepository', function ($http) {
    return {
        getFlotilla: function (factura, vin) {
            return $http.get(searchUrl + '1|' + factura + '|' + vin);
        },
        getGerente: function (idpersona) {
            return $http.get(searchUrl + '3|' + idpersona);
        }
    };
});