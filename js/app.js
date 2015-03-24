var app = angular.module('pluginsLibApp', ['lumx']);

app.controller("pluginsLibController", ['$scope', '$http', function($scope, $http) {
	$scope.plugins = [
		{ name: "test", url: "http://www.google.com", desc: "gerwg ewge gerw", category: ["test", "app"]},
		{ name: "test2", url: "http://www.google.com.hk", desc: "fsadf saf saf", category: ["test", "web"]}
	];

	$scope.isApp = true;
	$scope.isTest = true;
	$scope.isWeb = true;

	$scope.updateFilter = function(value, index) {
		if ($scope.isApp && jQuery.inArray("app", value.category) >= 0) return true;
		if ($scope.isTest && jQuery.inArray("test", value.category) >= 0) return true;
		if ($scope.isWeb && jQuery.inArray("web", value.category) >= 0) return true;
		return false;
	}

	$http.get("data.json").success(function(data) {
		$scope.plugins = data;
	})
}]);