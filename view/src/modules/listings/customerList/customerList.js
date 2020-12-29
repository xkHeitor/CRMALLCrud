(function () {
	'use strict'
	angular.module("app")
	.controller("CustomerListCtrl", function ($scope, $http, API_PATH, SweetAlert, $state) {

		// Inicialização de váriaveis necessárias para listagem.
		$scope.customers;
		$scope.emptyCustomers = true;

		// Função inicial que busca listagem dos clientes.
		$scope.initialize = function () {
			$http({ method: 'GET', url: API_PATH + "customer"})
				.then(response => {
					if (response.data.length > 0) {
						$scope.customers		= response.data;
						$scope.emptyCustomers	= false;
					} else {
						$scope.customers		= {};
						$scope.emptyCustomers	= true;
					}
				});
		}

		// Função para deletar cliente.
		$scope.delete = function (customerObj) {
			$http({ method: 'DELETE', url: API_PATH + "customer/" + customerObj.uuid})
				.then(response => {
					SweetAlert.success("Cliente deletado com sucesso!");
					$scope.initialize();
				});
		}

		// Redireciona para página de edição de cliente.
		$scope.goEdit = function (customerObj) {
			$state.go("/addEditCustomers", {"uuid": customerObj.uuid});
		}

	})
})();