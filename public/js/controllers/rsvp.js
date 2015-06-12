var weddingApp = angular.module('weddingApp', []);

weddingApp.controller('RsvpController', ['$scope','$http', function ($scope, $http) {
  var home                = this;
  home.author           = "Michael Sawyer";
  home.rsvp             = {};
  home.rsvp.name        = '';
  home.rsvp.count       = 0;
  home.rsvp.message     = '';
  home.rsvp.email       = '';
  home.rsvp.menuBeef    = 0;
  home.rsvp.menuChicken = 0;
  home.rsvp.menuVeggie  = 0;

  this.submitRsvp = function() {
    $http.post("/api/guests", home.rsvp).success(function(data, status) {
      home.rsvp.name        = '';
      home.rsvp.count       = 0;
      home.rsvp.message     = '';
      home.rsvp.email       = '';
      home.rsvp.menuBeef    = 0;
      home.rsvp.menuChicken = 0;
      home.rsvp.menuVeggie  = 0;
    }).error(function(data, status) {
        console.log("That sucks...")
    })
  };

}]);
