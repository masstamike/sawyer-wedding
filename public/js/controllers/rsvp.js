var weddingApp = angular.module('weddingApp', []);

weddingApp.controller('RsvpController', ['$scope','$http', function ($scope, $http) {
  var home          = $scope;
  $scope.author           = "Michael Sawyer";
  $scope.rsvp             = {};
  $scope.rsvp.name        = '';
  $scope.rsvp.count       = 0;
  $scope.rsvp.message     = '';
  $scope.rsvp.email       = '';
  $scope.rsvp.menuBeef    = 0;
  $scope.rsvp.menuChicken = 0;
  $scope.rsvp.menuVeggie  = 0;

  this.submitRsvp = function() {
    $http.post("/api/guests", home.rsvp).success(function(data, status) {
      var payload = home.rsvp;
      home.rsvp.name        = '';
      home.rsvp.count       = 0;
      home.rsvp.message     = '';
      home.rsvp.email       = '';
      home.rsvp.menuBeef    = 0;
      home.rsvp.menuChicken = 0;
      home.rsvp.menuVeggie  = 0;
      return payload;
    })
  };

}]);
