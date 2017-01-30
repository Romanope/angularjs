angular
	.module('app')
	.directive('appDirective', function() {
		return {
			template: '<h1>Minha Diretiva</h1>',
			scope: {
				name: '@',
				lastname: '@'
			},
			link: function($scope, $element, $attr) {
				console.log($scope);
			}
		}
	});