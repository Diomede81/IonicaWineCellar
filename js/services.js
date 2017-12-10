/**
 * Created by Diomede on 26/05/2017.
 */

(function() {
    angular.module('ionicaControllersServices', ['ionicaManipulationServices', 'angular-storage'])

        .factory('getAddressAPI', function($http, GetDataService) {

            return {

                getAddressFromPostcode: function(postcode) {

                    var data = GetDataService.getHTTPData("https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=f6224-7ffbb-4eb91-023e0&postcode=" + postcode + "&response=data_formatted");

                    return data;

                }

            };

        })

        .factory('BasketService', function(store, $http, GetDataService, DomManipulation, $location) {

            var BasketService = {

                addItemTobasket: function(item, element, quantity, basket) {

                    if (basket === null) {

                        basket = [];
                        item.wine.totalBasket += quantity;
                        basket.push(item.wine);
                        store.set('basketCookie', basket);
                        DomManipulation.addItemToBasketDom(element);
                        DomManipulation.makeBasketIconAppearDisappear('appear');

                    } else {
                        var index = -1;

                        for (var i = 0; i < basket.length; i++) {

                            if (basket[i].id === item.wine.id) {

                                index = i;
                            }
                        }

                        if (index === -1) {
                            basket.push(item.wine);
                            basket[i].totalBasket += quantity;
                            store.remove('basketCookie');
                            store.set('basketCookie', basket);
                            DomManipulation.addItemToBasketDom(element);

                        } else {
                            basket[index].totalBasket += quantity;
                            store.remove('basketCookie');
                            store.set('basketCookie', basket);
                            DomManipulation.addItemToBasketDom(element);
                        }

                    }

                    return basket

                },

                updateBasket: function(basket, finalQuantity, id) {

                    if (typeof(finalQuantity) === "number" && isNaN(finalQuantity) === false) {
                        for (var i = 0; i < basket.length; i++) {

                            if (parseInt(id) === basket[i].id) {

                                basket[i].totalBasket = finalQuantity;
                                store.remove('basketCookie');
                                store.set('basketCookie', basket);
                            }

                        }

                        return basket

                    } else {
                        alert('please insert a valid number');
                        return ('error')
                    }
                },

                basketItemsTotals: function(basket) {

                    var sum = 0;
                    var quantity = 0;
                    var i = 0;
                    if (basket === null) {
                        return 0;
                    } else {
                        while (i < basket.length) {
                            quantity += basket[i].totalBasket;
                            sum += (basket[i].price * basket[i].totalBasket);
                            i++;
                        }
                        return {
                            "sum": sum,
                            "quantity": quantity
                        }
                    }
                },

                stockAvailabilityCheck: function(event, basket, wineStock, basketWineContent) {



                    if (basket === null) {

                        DomManipulation.basketEmptyError();
                        return 'error'
                    } else {

                        var index = 0;

                        for (var i = 0; i < basketWineContent.length; i++) {

                            var quantity = parseInt(basketWineContent[i].quantity);

                            var id = parseInt(basketWineContent[i].id);

                            for (var n = 0; n < wineStock.length; n++) {


                                if (wineStock[n].id === id && quantity > parseInt(wineStock[n].stock)) {

                                    DomManipulation.wineStockCheckMessages("error", i, wineStock[n].stock);

                                    index += 1;

                                } else if (wineStock[n].id === id && quantity <= parseInt(wineStock[n].stock)) {
                                    DomManipulation.wineStockCheckMessages("success", i, wineStock[n].stock);

                                }
                            }
                        }
                        if (index === 0) {
                            store.set('basketCookie', basket);
                            $location.path('/confirmationForm');
                            return 'Completed'
                        } else {

                            return 'error'
                        }


                    }
                },


                removeItem: function(id, basket) {

                    for (var i = 0; i < basket.length; i++) {

                        if (parseInt(basket[i].id) === parseInt(id)) {


                            while (i < basket.length) {

                                basket[i] = basket[i + 1];

                                i++;
                            }
                            basket.pop();

                        }
                    }
                    store.set('basketCookie', basket);
                    return (basket);

                }

            };

            return BasketService;

        })

})();