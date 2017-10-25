# Ionica Wine Cellar

The website created for this project is a wine wholesale website mainly utilized to showcase wines, production origin and wholesale, 
users can get more information about each wine type and eventually purchase them via a
simple confirmation process, the app will only send a purchase cofirmation email to the wine cellar owner for the order to be 
taken into account and reviewed with the customer,it is single page web application created utilizing AngularJs
routing and other technologies.

## Features

#### Existing Features

- Ability to check wines provenience, price and further information

- Ability to navigate pages seamlessly via one page application routing

- Ability to add wines to basket

- Ability to review wine before purchase

- Real-time stock checker

- Ability to send queries via form

- Ability to submit order via form



## Getting Started

1. Firstly you will need to clone this repository by running the ```git clone https://github.com/Diomede81/ionicawinecellar.git``` command
2. After you've done that please make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request


## Running the tests

Jasmine/Karma testing suite have been used to test the user action of adding items to the basket and eventual basket calculation about 
prices and quantities

Jasmine/Karma(if you follow the installation procedure correctly) will be installed with NPM/Bower packages and ready to use

if you have any trouble installing please visit the this [link](https://karma-runner.github.io/1.0/intro/installation.html)

### Tests

The Tests have been designed to verify correct functionality of the services that will take care of the shopping basket
and other APIs(I.e. the API that will retrieve list of addresses from postcode provided)

An Example:

```

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

```


## Deployment

The application is ready to be deployed on a live web server, just copy the files in the designated Web-Server Folder and the site should be loading successfully

## Built With


* HTML5/CSS3 - The languages used for the pages design
* [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/) - The responsive design development Framework Used
* JAVASCRIPT - The language used to build the interactivity of the web page elements
* [JQuery](https://jquery.com/) - The Library used to enhance the interactivity of the web page elements for cross-browser successful implementation
* [AngularJS](https://angularjs.org/) - The Javascript framework used for implementing local-storage, page-routing
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Bower](https://bower.io/) - Dependency Management
* [Jasmine](https://jasmine.github.io/) - The testing framework used
* [Karma](https://karma-runner.github.io/1.0/index.html) - The test runner used
* [JetBrains Webstorm](https://www.jetbrains.com/webstorm/) - The IDE used to develop and test the application

## Versioning

I have used [Git](https://git-scm.com/) & [GitHub](https://github.com/)( for versioning.

## Author

* **Luca Licata** - [GitHub](https://github.com/Diomede81) - [Linkedin](www.linkedin.com/in/luca-licata-26637641
)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Many Thanks to my Mentor **Theo Despoudis** [GitHub](https://github.com/theodesp) for all the support with ensuring that this application's code would be up to high standards

