
//Service in Charge of providing the addresses back to the Basket Controller

describe('getAddressAPI',function(){

    var getAddressAPI;


    beforeEach(angular.mock.module('ionicaControllersServices'));

    beforeEach(inject(function(_getAddressAPI_){

        getAddressAPI = _getAddressAPI_;

    }));

    it('should exist',function(){

        expect(getAddressAPI).toBeDefined();

    });

    describe('.getAddressFromPostcode()',function(){

        it('should exist',function(){

            expect(getAddressAPI.getAddressFromPostcode()).toBeDefined();
        });

    });

});

//Service in charge of all of the Basket Related calculation Services



describe('BasketService',function() {

    var mockDomManipulationService = {

        addItemToBasketDom: function (item) {

            item = 1;
            console.log('I am dom basket Add');

            return item;
        },

        wineStockCheckMessages: function (item, mockVar, wineStock) {
            item = 1;
            console.log(item);
            return 1
        },


        basketEmptyError : function () {


        },

        makeBasketIconAppearDisappear: function(action,basket){
            return 1
        }

    };


    //In order to inject mock dependencies into a specific service we need to inject them when we inject the module related to the Services we are trying to test, that will Work!!!

    beforeEach(module('ionicaControllersServices',function($provide){

        $provide.value('DomManipulation',mockDomManipulationService)

    }));

    var BasketService;
    var DomManipulation;

    beforeEach(function(){ inject(function(_BasketService_,_DomManipulation_) {

        BasketService = _BasketService_;
        DomManipulation = _DomManipulation_;
    })
    });

    describe('.addItemTobasket()', function () {

        var itemTest1 =
            {
                wine: {

                    id: 1,
                    totalBasket:0
                }

            };

        var itemTest2 =
            {
                wine: {

                    id: 4,
                    totalBasket:0
                }

            };


        var basket = [
            {
                id: 1,
                totalBasket: 0
            },
            {
                id: 2,
                totalBasket: 1
            },
            {
                id: 3,
                totalBasket: 2
            }
        ];


        var element = "";

        var quantityTest1 = 1;
        var quantityTest2 = 2;

        var addItemToBasketDomSpy;

        beforeEach(function(){

            addItemToBasketDomSpy = spyOn(DomManipulation,'addItemToBasketDom').and.returnValue(2);

        });


        it('should Exist', inject(function (BasketService) {

            expect(BasketService.addItemTobasket(itemTest1, element,quantityTest1,basket)).toEqual([{id: 1, totalBasket:1},{id: 2,totalBasket: 1},{id: 3,totalBasket: 2}]);
            expect(addItemToBasketDomSpy).toHaveBeenCalledWith(element);
            expect(addItemToBasketDomSpy).toHaveBeenCalledTimes(1);

        }));

        it('should Exist', inject(function (BasketService) {

            expect(BasketService.addItemTobasket(itemTest2,element,quantityTest2,basket)).toEqual([{id: 1, totalBasket:1},{id: 2,totalBasket: 1},{id: 3,totalBasket: 2},{id: 4,totalBasket: 2}])
            expect(addItemToBasketDomSpy).toHaveBeenCalledWith(element);
            expect(addItemToBasketDomSpy).toHaveBeenCalledTimes(1);

        }));

    });

// Factory responsible for adding wines to the basket

    describe('.addItemTobasket()', function () {


        var item =
            {
                wine: {

                    id: 4,
                    totalBasket:0
                }

            };

        var basket = null;

        var element = "";

        var quantity = 2;

        var addItemToBasketDomSpy

        beforeEach(function(){

            addItemToBasketDomSpy = spyOn(DomManipulation,'addItemToBasketDom').and.returnValue(2);
            addItemToBasketDomSpy2 = spyOn(DomManipulation,'makeBasketIconAppearDisappear').and.returnValue(2);

        });


        it('should Exist', inject(function (BasketService) {

            expect(BasketService.addItemTobasket(item,element,quantity,basket)).toEqual([{id:4, totalBasket:2}]);
            expect(addItemToBasketDomSpy).toHaveBeenCalledWith(element);
            expect(addItemToBasketDomSpy2).toHaveBeenCalledWith('appear');
            expect(addItemToBasketDomSpy).toHaveBeenCalledTimes(1);

        }))

    });




// Factory responsible for updating the basket

    describe('.updateBasket()',function(){

        var basket = [
            {
                id: 1,
                totalBasket: 0
            },
            {
                id: 2,
                totalBasket: 1
            },
            {
                id: 3,
                totalBasket: 2
            }
        ];

        var quantity = 3;
        var quantityString ="+";

        var id = 1;

        it('should take three arguments and provide back the basket with updated items',inject(function(BasketService){

            expect(BasketService.updateBasket(basket,quantity,id)).toEqual([
                {
                    id: 1,
                    totalBasket: 3
                },
                {
                    id: 2,
                    totalBasket: 1
                },
                {
                    id: 3,
                    totalBasket: 2
                }
            ])

        }));

        it('should provide an error message when the quantity is not a number',inject(function(BasketService){


            expect(BasketService.updateBasket(basket,quantityString,id)).toEqual('error')

        }))
    });

    describe('.basketItemsTotals()',function(){

        var basket = [
            {
                id: 1,
                price:1,
                totalBasket: 0
            },
            {
                id: 2,
                price:2,
                totalBasket: 1
            },
            {
                id: 3,
                price: 3,
                totalBasket: 2
            }
        ];

        it('should take the basket when null and return 0',inject(function(BasketService){

            expect(BasketService.basketItemsTotals(null)).toEqual(0)
        }));

        it ('should take the basket object and return the total quantity of items and the total price',inject(function(BasketService){

            expect(BasketService.basketItemsTotals(basket)).toEqual({"sum" : 8 , "quantity" : 3})

        }))
    });

    describe('.stockAvailabilityCheck()',function(){

        var basket = [
            {
                id: 1,
                price:1,
                totalBasket: 0
            },
            {
                id: 2,
                price:2,
                totalBasket: 1
            },
            {
                id: 3,
                price: 3,
                totalBasket: 2
            }
        ];

        var wineStock = [
            {
                id: 1,
                price:1,
                stock: 0
            },
            {
                id: 2,
                price:2,
                stock: 1
            },
            {
                id: 3,
                price: 3,
                stock: 2
            },
            {
                id: 4,
                price:2,
                stock: 1
            },
            {
                id: 5,
                price: 3,
                stock: 2
            }
        ];

        var basketWineContent = [
            {
                id: 1,
                price:1,
                quantity: 0
            },
            {
                id: 2,
                price:2,
                quantity: 1
            }

        ];

        var basketWineContentTest2 = [
            {
                id: 1,
                price:1,
                quantity: 0
            },
            {
                id: 2,
                price:2,
                quantity: 1
            },

            {
                id :3,
                price : 3,
                quantity :1
            }

        ];

        event = "";

        var wineStockCheckMessagesSpy;

        beforeEach(function(){

            wineStockCheckMessagesSpy = spyOn(DomManipulation,'wineStockCheckMessages').and.returnValue(2);

        });

        it('should take three variable and identify if there are items in the basket which the quantity is more than actual stock available',inject(function(BasketService){


            expect(BasketService.stockAvailabilityCheck(event,null,wineStock,basketWineContent)).toEqual('error');
            expect(wineStockCheckMessagesSpy).toHaveBeenCalledTimes(0);

            expect(BasketService.stockAvailabilityCheck(event,basket,wineStock,basketWineContent)).toEqual('Completed');

            expect(wineStockCheckMessagesSpy).toHaveBeenCalledTimes(2);

        }))

    });

    describe('.stockAvailabilityCheck()',function(){

        var basket = [
            {
                id: 1,
                price:1,
                totalBasket: 0
            },
            {
                id: 2,
                price:2,
                totalBasket: 1
            },
            {
                id: 3,
                price: 3,
                totalBasket: 2
            }
        ];

        var wineStock = [
            {
                id: 1,
                price:1,
                stock: 0
            },
            {
                id: 2,
                price:2,
                stock: 1
            },
            {
                id: 3,
                price: 3,
                stock: 2
            },
            {
                id: 4,
                price:2,
                stock: 1
            },
            {
                id: 5,
                price: 3,
                stock: 2
            }
        ];


        var basketWineContent = [
            {
                id: 1,
                price:1,
                quantity: 0
            },
            {
                id: 2,
                price:2,
                quantity: 1
            },

            {
                id :3,
                price : 3,
                quantity :3
            }

        ];

        event = "";

        var wineStockCheckMessagesSpy;

        beforeEach(function(){

            wineStockCheckMessagesSpy = spyOn(DomManipulation,'wineStockCheckMessages').and.returnValue(2);

        });

        it('should take three variable and identify if there are items in the basket which the quantity is more than actual stock available',inject(function(BasketService){


            expect(BasketService.stockAvailabilityCheck(event,basket,wineStock,basketWineContent)).toEqual('error');

            expect(wineStockCheckMessagesSpy).toHaveBeenCalledTimes(3);

        }))

    });

    describe('.removeItem',function(){

        var basket = [
            {
                id: 1,
                price:1,
                totalBasket: 0
            },
            {
                id: 2,
                price:2,
                totalBasket: 1
            },
            {
                id: 3,
                price: 3,
                totalBasket: 2
            }
        ];

        it('should remove the item in the basket that matches the ID and move all the array element in the basket forward',inject(function(BasketService){

            expect(BasketService.removeItem(1,basket)).toEqual([
                {
                    id: 2,
                    price:2,
                    totalBasket: 1
                },
                {
                    id: 3,
                    price: 3,
                    totalBasket: 2
                }
            ])

        }))

    })

});