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

        .directive('menuAnimation',function(){

            return{

                link: function(scope,element){

                    element.hover(function(e){angular.element(e.currentTarget).find('hr').slideToggle('fast') })

                }

            }

        })

})();