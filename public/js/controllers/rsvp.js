var weddingApp = angular.module('weddingApp', []);

weddingApp.controller('RsvpController', ['$scope','$http', function ($scope, $http) {
  var home                = this;
  home.author           = "Michael Sawyer";
  home.modalEnum        = {
                            none: null,
                            success: "Success",
                            failure: "Failure",
                            hotel: "Hotel Reservations"
                          };
  home.modalSet         = home.modalEnum.none;
  home.rsvp             = {};
  home.rsvp.name        = '';
  home.rsvp.count       = 0;
  home.rsvp.message     = '';
  home.rsvp.email       = '';
  home.rsvp.menuBeef    = 0;
  home.rsvp.menuChicken = 0;
  home.rsvp.menuVeggie  = 0;

  this.submitRsvp = function() {
    if (home.rsvp.name != '' && home.rsvp.email != '') {
      $http.post("/api/guests", home.rsvp).success(function (data, status) {
        home.rsvp.name = '';
        home.rsvp.count = 0;
        home.rsvp.message = '';
        home.rsvp.email = '';
        home.rsvp.menuBeef = 0;
        home.rsvp.menuChicken = 0;
        home.rsvp.menuVeggie = 0;
        console.log("Return code = " + status);
        $('#successModal').modal();
      }).error(function (data, status) {
        $('#failureModal').modal();
        console.log("That sucks...")
      })
    }
  };

}]);
