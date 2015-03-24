var app = angular.module('pluginsLibApp', ['lumx']);

app.controller("pluginsLibController", ['$scope', '$http', function($scope, $http) {
	$scope.plugins = [];
	$scope.filters = [];

	$scope.updateFilter = function(value, index) {
		for (var i = $scope.filters.length - 1; i >= 0; i--) {
			if ($scope.filters[i].show && $.inArray($scope.filters[i].name, value.category) >= 0) return true;
		};
		return false;
	}

	$http.get("data.json").success(function(data) {
		$scope.plugins = data;
		var filters = [];
		for (var i = data.length - 1; i >= 0; i--) {
			for (var j = data[i].category.length - 1; j >= 0; j--) {
				if($.inArray(data[i].category[j], filters) < 0)
					filters.push(data[i].category[j]);
			};
		};
		for (var i = filters.length - 1; i >= 0; i--) {
			filters[i] = {name: filters[i], id: i, show: false};
		};
		$scope.filters = filters;
	})
}]);

