'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'noBrokerService', function($scope, $http, noBrokerService) {
  $scope.test = "test";
  $scope.properties = undefined;
  const propertiesURL = 'http://demo8213882.mockable.io/fetchProperties';
  $scope.filters = ['FULLY_FURNISHED'];


  $scope.getProperties = () => {
    $http.get(propertiesURL).
    then(function(response) {
        $scope.properties = response.data.data;
    });
  }

  $scope.addFilter = (value) => {

  }

}])

.service('noBrokerService', function($http) {

  this.getProperties = function () {
    const propertiesURL = 'http://demo8213882.mockable.io/fetchProperties';
      return x.toString(16);
  }
});
