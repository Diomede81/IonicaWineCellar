/**
 * Created by Diomede on 22/05/2017.
 */



if (window.location.href === "http://localhost:63342/ionicawineCellarProject/templates/wines.html#whiteWineTabLink"){
    window.scroll(0,-100);
    document.getElementById('red').setAttribute('class','tab-pane fade');
    document.getElementById('redWineTabLink').setAttribute('class','');
    document.getElementById('whiteWineTabLink').setAttribute('class','active');
    document.getElementById('white').setAttribute('class','tab-pane fade active in  ');
    document.getElementsByClassName('nav-tabs')[0].style.backgroundColor = 'rgb(230,230,230)';
    document.getElementsByClassName('wines-filter-full-container')[0].style.backgroundColor = 'rgb(230,230,230)';
    document.getElementsByClassName('wine-region')[0].style.color = 'black';
    console.log(document.getElementById('white'));
}
if (window.location.href === "http://localhost:63342/ionicawineCellarProject/templates/wines.html#sparklingWineTabLink") {
    window.scrollDown = 10;
    document.getElementById('red').setAttribute('class', 'tab-pane fade');
    document.getElementById('redWineTabLink').setAttribute('class', '');
    document.getElementById('sparklingWineTabLink').setAttribute('class', 'active');
    document.getElementById('sparkling').setAttribute('class', 'tab-pane fade active in  ');
    document.getElementsByClassName('nav-tabs')[0].style.backgroundColor = 'rgb(215, 196, 168)';
    document.getElementsByClassName('wines-filter-full-container')[0].style.backgroundColor = 'rgb(215, 196, 168)';
    document.getElementsByClassName('wine-region')[0].style.color = 'black';

    console.log(document.getElementById('white'));
}


ActivateWineOverlayDescription = function(element){
    var wineContainer = element.parentNode;
    console.log(wineContainer.childNodes[1]);


    var animation = setInterval(moveOverlayLeft,1);
    var pos = 100;
    var opacity = 0;
    function moveOverlayLeft(){


        if (pos <= 0){

            clearInterval(animation);
        }
        else {
            pos-=2;
            opacity +=1;
            wineContainer.childNodes[1].style.left = pos + "%";
            wineContainer.childNodes[1].style.opacity = opacity;

        }
    }
};

CloseWineOverlayDescription = function(overlay){

    var pos = 0;
    var opacity = 10;
    var animation = setInterval(moveOverlayRight,1);
    function moveOverlayRight(){


        if (pos >= 100){
            clearInterval(animation)
        }
        else {
            pos+=2;
            opacity -=1;
            overlay.style.left = pos + "%";
            overlay.style.opacity = opacity;

        }
    }
};

function initMap() {
    var sutton = {lat: 51.36163, lng:  -0.194924};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: sutton
    });
    var marker = new google.maps.Marker({
        position: sutton,
        map: map
    });
}

function openMobileMenu(){

    $('.navbar-nav').slideToggle("medium");

}




