var app = angular.module('pluginsLibApp', ['lumx']);

app.controller("pluginsLibController", ['$scope', '$http', function($scope, $http) {
	$scope.plugins = [];

	$scope.isAndroid = true;
	$scope.isImage = true;
	$scope.isScroll = true;
	$scope.isWeb = true;
	$scope.isDotNet = true;
	$scope.isMobile = true;

	$scope.updateFilter = function(value, index) {
		if ($scope.isAndroid && jQuery.inArray("android", value.category) >= 0) return true;
		if ($scope.isImage && jQuery.inArray("image", value.category) >= 0) return true;
		if ($scope.isScroll && jQuery.inArray("scroll", value.category) >= 0) return true;
		if ($scope.isWeb && jQuery.inArray("web", value.category) >= 0) return true;
		if ($scope.isDotNet && jQuery.inArray(".net", value.category) >= 0) return true;
		if ($scope.isMobile && jQuery.inArray("mobile", value.category) >= 0) return true;
		return false;
	}

	$http.get("data.json").success(function(data) {
		$scope.plugins = data;
	})
}]);