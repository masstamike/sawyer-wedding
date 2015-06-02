/**
 * Created by masstamike on 6/1/15.
 */

describe('Registrations', function () {
    var RegController,scope,http,httpBackend;

    beforeEach(module('weddingApp'));

    beforeEach(inject(function($injector) {
        httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(inject(function ($controller, $rootScope, $http) {
        scope = $rootScope.$new();
        http = $http;
        RegController= $controller('RegController', {
            $scope: scope,
            $http: http
        });
        RegController.prodURL = 'http://www.target.com/gift-registry/giftGiverResponse?registryId=RCgxkJ-iwz5Q1mGATl5b1A&registryType=WEDDING&sid=0.5131739403586835&_=1433224341180';
        RegController.devURL = '/public/registration.json';
    }));

    describe('RegController', function() {
        it('Can retrieve registry.',
            function() {
            });

        describe('Populating objects', function() {

            it('Items should have fields filled out.',
                function() {
                });
        })
    });

});
