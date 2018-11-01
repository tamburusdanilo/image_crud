angular.module('image_crud')
	.controller('GruposController', function($scope, $http) {
		$http.get('/v1/grupos')
			.success(function(grupos) {
			$scope.grupos = grupos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});