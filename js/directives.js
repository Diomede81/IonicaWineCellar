(function(){

    angular.module('IonicaDirectives',[])

        .directive('mypageFooter', function () {

            return {
                restrict: 'E',
                templateUrl: 'templates/pageFooter.html'
            }
        })



    // main navigation menu directive

        .directive('navMenu', function () {



            return {
                restrict: 'E',
                templateUrl: 'templates/navMenu.html'

            }

        })

        // small vertical navigation included in informational pages aboutUs, delivery, contacts and customer login

        .directive('infopagesnavigation', function () {

            return {
                restrict: 'E',
                templateUrl: '/ionicawineCellarProject/templates/infopagesnavigation.html'
            }

        })

        .directive('menuAnimation',function(){

            return{

                link: function(scope,element){

                    element.hover(function(e){angular.element(e.currentTarget).find('hr').slideToggle('fast') })

                }

            }

        })

})();