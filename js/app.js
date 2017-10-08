/**
 * Created by Diomede on 09/05/2017.
 */
(function() {
    angular.module('Ionica', ['ngRoute', 'RouteControllers', 'ui.router', 'angular-storage', 'ionicaManipulationServices', 'IonicaDirectives', 'ionicaControllersServices'])

        .config(function ($locationProvider, $routeProvider, $stateProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.when('/', {
                templateUrl: 'templates/home.html',
                controller: 'WinesController'

            });

            $routeProvider.when('/wines', {
                templateUrl: 'templates/wines.html',
                controller: 'WinesController'

            })

                .when('/ourCustomers', {

                    templateUrl: 'templates/ourCustomers.html',
                    controller: 'basketController'
                })

                .when('/aboutUs', {
                    templateUrl: 'templates/aboutUs.html',
                    controller: 'basketController'

                })

                .when('/contacts', {

                    templateUrl: 'templates/contacts.html',
                    controller: 'basketController'

                })
                .when('/basket', {

                    templateUrl: 'templates/basketPage.html',
                    controller: 'basketController'

                })
                .when('/confirmationForm', {

                    templateUrl: 'templates/order_form.html',
                    controller: 'basketController'

                })

                .when('/enquiryForm', {

                    templateUrl: 'templates/enquiriesForm.html',
                    controller: 'basketController'

                })

                .otherwise({

                    templateUrl: 'templates/home.html',
                    controller: 'WinesController'

                });

            var redWineState = {

                name: 'redWine',
                url: '/wines',
                templateUrl: 'templates/redwines.html'

            };

            var whitewineState = {

                name: 'whiteWine',
                url: '/wines',
                templateUrl: 'templates/whitewines.html'
            };


            var sparklingwineState = {

                name: 'sparklingWine',
                url: '/wines',
                templateUrl: 'templates/sparklingwines.html'
            };

            $stateProvider.state(redWineState);
            $stateProvider.state(whitewineState);
            $stateProvider.state(sparklingwineState);

        })
})();