(function () {
	'use strict'
	angular.module('app')
	.filter('gender', function () {
		return function(input) {
			let gender = "";
			switch (input) {
				case "M":
					gender = "Masculino";
				break;
				case "F":
					gender = "Feminino";
				break;
				case "O":
					gender = "Outros";
				break;
			}
			return gender;
		}
	});
})();