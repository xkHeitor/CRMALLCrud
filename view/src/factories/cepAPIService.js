angular.module('app')
	.factory('cepAPI', function (URL_CEP, $http) {
		var _getLocationByCep = function (cep) {
			let urlWS = URL_CEP + cep + '/json/';
			return $http({ method: 'GET', url: urlWS})
		};
		return {
			getLocationByCep: _getLocationByCep
		};
	});
