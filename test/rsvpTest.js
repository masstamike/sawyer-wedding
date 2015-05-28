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
        it('Should initialize values properly.',
          function() {
            expect(scope.rsvp.name).toEqual('');
            expect(scope.rsvp.count).toEqual(0);
            expect(scope.rsvp.message).toEqual('');
            expect(scope.rsvp.email).toEqual('');
            expect(scope.rsvp.menuBeef).toEqual(0);
            expect(scope.rsvp.menuChicken).toEqual(0);
            expect(scope.rsvp.menuVeggie).toEqual(0);
        });

        describe('FrontEnd and Backend Interaction', function() {

            it('Should send the fields of rsvp over POST.',
                function() {
                    scope.rsvp.name = 'Sawyer';
                    scope.rsvp.count = 4;
                    scope.rsvp.message = 'Hello world!';
                    scope.rsvp.email = 'root@example.com';
                    scope.rsvp.menuBeef= 3;
                    scope.rsvp.menuChicken= 1;
                    scope.rsvp.menuVeggie= 0;

                    RsvpController.submitRsvp();
                    httpBackend.expectPOST('/api/guests', '{"name":"Sawyer",' +
                        '"count":4,"message":"Hello world!",' +
                        '"email":"root@example.com","menuBeef":3,' +
                        '"menuChicken":1,"menuVeggie":0}')
                        .respond(201,'');
                    httpBackend.flush();
                });
            it('Should reset the fields of rsvp after successful POST.',
                function() {
                    scope.rsvp.name         = 'Sawyer';
                    scope.rsvp.count        = 4;
                    scope.rsvp.message      = 'Hello world!';
                    scope.rsvp.email        = 'root@example.com';
                    scope.rsvp.menuBeef     = 3;
                    scope.rsvp.menuChicken  = 1;
                    scope.rsvp.menuVeggie   = 0;

                    RsvpController.submitRsvp();
                    httpBackend.expectPOST('/api/guests', '{"name":"Sawyer",' +
                        '"count":4,"message":"Hello world!",' +
                        '"email":"root@example.com","menuBeef":3,' +
                        '"menuChicken":1,"menuVeggie":0}')
                        .respond(201,'');
                    httpBackend.flush();

                    expect(scope.rsvp.name).toBe('');
                    expect(scope.rsvp.count).toBe(0);
                    expect(scope.rsvp.message).toBe('');
                    expect(scope.rsvp.email).toBe('');
                    expect(scope.rsvp.menuBeef).toBe(0);
                    expect(scope.rsvp.menuChicken).toBe(0);
                    expect(scope.rsvp.menuVeggie).toBe(0);
                });
        })
    });

});
