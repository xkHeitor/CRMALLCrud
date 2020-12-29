(function () {
	'use strict'
	// Configurações da url e controller do conteúdo que aparecerá no ng-view do index.html
	angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state(
				'/addEditCustomers', {
				url:			"/addEditCustomers",
				controller:		"AddEditCustomersCtrl",
				templateUrl:	"src/modules/forms/addEditCustomers/addEditCustomers.html",
				params:			{'uuid' : null}
			})
			.state(
				'/customerList', {
				url:			"/customerList",
				controller:		"CustomerListCtrl",
				templateUrl:	"src/modules/listings/customerList/customerList.html"
			})
			.state(
				'/home', {
				url:			"/home",
				templateUrl:	"src/modules/home/home.html"
			});
	});
})();