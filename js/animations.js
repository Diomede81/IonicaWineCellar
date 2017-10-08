/**
 * Created by Diomede on 22/05/2017.
 */

function initMap() {
    var sutton = {
        lat: 51.36163,
        lng: -0.194924
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: sutton
    });
    var marker = new google.maps.Marker({
        position: sutton,
        map: map
    });
}

function openMobileMenu() {

    $('.navbar-nav').slideToggle("medium");

}



