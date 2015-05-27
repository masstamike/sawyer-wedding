/**
 * Created by masstamike on 5/21/15.
 */

describe('Wedding App', function () {
    var RsvpController,scope,http,httpBackend;

    beforeEach(module('rsvpApp'));

    beforeEach(inject(function($injector) {
        httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(inject(function ($controller, $rootScope, $http) {
        scope = $rootScope.$new();
        http = $http;
        RsvpController= $controller('RsvpController', {
            $scope: scope,
            $http: http
        });
    }));

    describe('RsvpController', function() {
        it('Should initialize count to 0.',
          function() {
            expect(RsvpController.rsvp.count).toEqual(0);
        });

        describe('FrontEnd and Backend Interaction', function() {

            it('Should send the fields of rsvp over POST.',
                function() {
                    RsvpController.rsvp.name = 'Sawyer';
                    RsvpController.rsvp.count = 4;
                    RsvpController.rsvp.message = 'Hello world!';
                    RsvpController.rsvp.email = 'root@example.com';
                    var response = RsvpController.submitRsvp();
                    httpBackend.expectPOST('/api/guests', '{"name":"Sawyer",' +
                        '"count":4,"message":"Hello world!",' +
                        '"email":"root@example.com"}')
                        .respond(201,'');
                    httpBackend.flush();
                });
            it('Should reset the fields of rsvp after successful POST.',
                function() {
                    RsvpController.rsvp.name = 'Sawyer';
                    RsvpController.rsvp.count = 4;
                    RsvpController.rsvp.message = 'Hello world!';
                    RsvpController.rsvp.email = 'root@example.com';
                    RsvpController.submitRsvp();
                    httpBackend.expectPOST('/api/guests', '{"name":"Sawyer",' +
                        '"count":4,"message":"Hello world!",' +
                        '"email":"root@example.com"}')
                        .respond(201,'');
                    httpBackend.flush();
                    expect(RsvpController.rsvp.name).toBe('');
                    expect(RsvpController.rsvp.count).toBe(0);
                    expect(RsvpController.rsvp.message).toBe('');
                    expect(RsvpController.rsvp.email).toBe('');
                });
        })
    });

});
