angular.module('app')
	.factory('statesAPI', function (API_PATH, $http) {
		var _getStates = function () {
			return $http({ method: 'GET', url: API_PATH + "state/"});
		};
		return {
			getStates: _getStates
		};
	});
