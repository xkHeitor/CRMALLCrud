(function () {
	'use strict'
	angular.module("app")
	.controller("AddEditCustomersCtrl", function ($scope, $http, API_PATH, $stateParams, SweetAlert, $state, statesAPI, cepAPI) {

		// Inicialização de váriaveis necessárias para listagem.
		$scope.customerObj	= {};
		$scope.ufs			= [];
		$scope.title		= "Cadastrar Cliente";

		// Carrega os estados;
		function _getStates () {
			statesAPI.getStates().then(function (response) {
				if (response.data) {
					$scope.ufs = response.data;
				} else {
					SweetAlert.warn("Ocorreu um problema ao carregar os estados.");
				}
			});
		}

		// Validação caso venha o UUID do cliente, que indicará que será uma edição.
		function _validUUIDCustomer () {
			let uuid = $stateParams.uuid;
			if (uuid) {
			$http({ method: 'GET', url: API_PATH + "customer/" + uuid})
				.then( function (response) {
					let customerObj 			= response.data;
					let dtnascimento			= new Date(response.data.dtnascimento.replace('Z', ''));
					customerObj.dtnascimento	= dtnascimento;
					$scope.customerObj			= customerObj;
					$scope.title				= "Editar Cliente";
				});
			}
		}

		// Função inicial, que chama as funções necessarias para inicialização da tela.
		$scope.init = function () {
			_getStates();
			_validUUIDCustomer();
		}

		// Verificação para saber se é uma adição ou um novo registro de cliente.
		$scope.validSaveOrEdit = function () {
			if ($scope.customerObj.uuid) {
				$scope.editCustomer();
			} else {
				$scope.saveCustomer();
			}
		}

			// Redireciona para a página de listagem de clientes.
			$scope.goList = function () {
				$state.go("/customerList");
			}

		// Função para salvar um novo registro.
		$scope.saveCustomer = function () {
			$http({ method: 'POST', url: API_PATH + "customer", data: $scope.customerObj})
				.then(response => {
					SweetAlert.success("Gravado com sucesso!");
					$scope.goList();
				}, error => {
					if (error.data.errors) {
						let msg = "";
						for (var key in error.data.errors) {
							msg += error.data.errors[key][0].msg + "<br>";
						}
						SweetAlert.error("", msg);
					}
				});
		}

		// Função que edita um registro.
		$scope.editCustomer = function () {
			$http({ method: 'PUT', url: API_PATH + "customer/" + $scope.customerObj.uuid, data: $scope.customerObj})
				.then(response => {
					SweetAlert.success("Editado com sucesso!");
					$scope.goList();
				});
		}

		// Função usada para fazer a busca dos dados pelo cep.
		$scope.fetchLocationData = function (cep) {
			if (cep) {
				cepAPI.getLocationByCep(cep)
					.then(function (response) {
						if (response.data) {
							_setLocationData(response.data);
						}
					});
			}

			// Seta valores da localização retornada do WS.
			function _setLocationData (locationData) {
				$scope.customerObj.endereco			= locationData.logradouro;
				$scope.customerObj.complemento		= locationData.complemento;
				$scope.customerObj.bairro			= locationData.bairro;
				$scope.customerObj.cidade			= locationData.localidade;
				$scope.customerObj.estado			= locationData.uf;
			}
		};

	})
})();