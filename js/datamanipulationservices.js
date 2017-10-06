(function(){

    angular.module('ionicaManipulationServices',['ionicaControllersServices'])

        .factory('GetDataService',function($http){

            return {

                getHTTPData : function(url){

                    return $http.get(url);

                }
            };

        })

        .factory('DomManipulation',function(store){

            return {

                postCodeCheck : function(results,postcode){

                    var addressNodelist = angular.element('#postcodeSelect').children();


                    if (!results.data.error_code){

                        angular.element('#postcodeError').css('display','none');
                        angular.element('#postcodeSuccess').css('display','block');
                        angular.element('#postcodeSuccess').html('Please select your address from the list below');


                        postCodes = results.data || [];

                        if (addressNodelist.length <= 1) {

                            this.AddAddressOptionNodes(postCodes.delivery_points, postcode);

                        }

                        else {

                            this.ClearSelectNode(postCodes.delivery_points);

                        }
                    }

                    else{
                        angular.element('#postcodeSuccess').css('display','none');
                        angular.element('#postcodeError').css('display','block');
                        angular.element('#postcodeError').html(results.data.error_msg);
                    }


                },


                AddAddressOptionNodes : function (item){

                    for (i = 0; i < item.length; i++) {

                        var option = document.createElement('option');

                        var text = document.createTextNode(item[i].organisation_name + " " + item[i].line_1 + ", " + item[i].line_2);

                        option.append(text);

                        angular.element('#postcodeSelect').append(option);
                    }
                },

                ClearSelectNode :function (postcodes){
                    var element = angular.element('#postcodeSelect').children();

                    var addressesList = [];

                    for (i=0;i<element.length;i++){
                        addressesList.push(element[i].value);

                    }

                    var i = 0;

                    while (addressesList[i] !== undefined) {

                        element[i].remove();
                        i++;
                    }

                    this.AddAddressOptionNodes(postcodes);

                },

                confirmAddress : function(){


                    if(angular.element('#postcodeSelect')[0].value === "? undefined:undefined ?"){

                        return false
                    }

                    else {

                        var addressString = angular.element('#postcodeSelect')[0].value;

                        var addressArray = addressString.split(',');

                        angular.element('#addressContainer').css('display', 'block');

                        angular.element('#addressLine1')[0].value = addressArray[0] + "," + addressArray[1];
                        angular.element('#addressLine2')[0].value = addressArray[2];
                    }
                },

                changeWineTabColorDom : function(element){
                    console.log(element)

                    var winelink = element.getAttribute('id');

                    if (winelink === 'redWineTabLink'){

                        angular.element('.nav-tabs').css('backgroundColor','rgb(100,34,34)');
                        angular.element('.wines-filter-full-container').css('backgroundColor','rgb(100,34,34)');

                    }

                    if (winelink === 'whiteWineTabLink'){
                        console.log('white');

                        angular.element('.nav-tabs').css('backgroundColor','rgb(230,230,230)');
                        angular.element('.wines-filter-full-container').css('backgroundColor','rgb(230,230,230)');
                        angular.element('.wine-region').css('color','rgb(34,34,34)');
                    }

                    if (winelink === 'sparklingWineTabLink'){

                        angular.element('.nav-tabs').css('backgroundColor','rgb(215, 196, 168)');
                        angular.element('.wines-filter-full-container').css('backgroundColor','rgb(215, 196, 168)');
                    }


                },


                makeBasketIconAppearDisappear: function(action,basket){
                    if(action === 'disappear') {

                        basket = null;
                        store.set('basketCookie', basket);
                        angular.element('#navbar-basket-icon').css('display', 'none');
                    }

                    else {

                        angular.element('#navbar-basket-icon').css('display', 'block');

                    }

                },

                addItemToBasketDom : function(element){

                    angular.element('#basket-menu-icon').removeClass('ng-hide');
                    angular.element(element.currentTarget).siblings('span').css('display','block');
                    setTimeout(function(){
                        angular.element(element.currentTarget).siblings('span').css('display','none');
                    },1000);

                },

                basketEmptyError : function(){

                    angular.element('.wine-basket-button-container p').addClass('error-message-basket-empty');
                    angular.element('.wine-basket-button-container p').html('Basket Empty');

                },

                GetValuesForStockCheck : function(){

                    var basketWineContent = angular.element('.basket-wine-display-row');

                    basketWineContentObj = [];

                    for (var i=0;i<basketWineContent.length;i++) {

                        var quantity = parseInt(angular.element(basketWineContent[i]).find('input').val());

                        var id = parseInt(angular.element(basketWineContent[i]).attr('id'));

                        basketWineContentObj[i]={id:id,quantity : quantity};

                    }

                    return basketWineContentObj;



                },

                wineStockCheckMessages : function(message,i,availability){
                    var basketWineContent = angular.element('.basket-wine-display-row');

                    if(message === "error") {

                        angular.element(basketWineContent[i]).find('input').addClass('error');
                        angular.element(basketWineContent[i]).find('.error-message').html('Please change quantity only ' + availability + " available");
                    }

                    else{

                        angular.element(basketWineContent[i]).find('input').removeClass('error');
                        angular.element(basketWineContent[i]).find('.error-message').html("");

                    }
                }

            };

        })

})();