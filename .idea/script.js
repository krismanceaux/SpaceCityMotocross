function initMap() {
    var houston = {lat: 29.7604, lng: -95.3698};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: houston

    });
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    //create a function that passes the information in a dictionary format to addresses
    var info = {"Rio" : {"address" : "11610 N Lake Houston Pkwy, Houston, TX 77044",
                        "hours" : "9 - 6"},
                "Three Palms" : {"address" : "15100 Interstate 45 S, Conroe, TX 77384",
                                "hours" : "9 - 8"},
                "Ultimate MX" : {"address" : "1836 Algoa-Friendswood Rd., Alvin, TX",
                                "hours" : "9 - 8"},
                "Southwest MX" : {"address" : "6730 Williams School Road, Needville, TX 77461",
                                "hours" : "9 - 8"},
                "Splendora MX" : {"address" : "577 County Road 3663, Splendora, Texas 77372",
                                "hours" : "9 - 6"}};
    var addresses = ["11610 N Lake Houston Pkwy, Houston, TX 77044",
        "15100 Interstate 45 S, Conroe, TX 77384",
        "11501 FM 2100, Highlands, TX 77562",
        "1836 Algoa-Friendswood Rd., Alvin, TX",
        "6730 Williams School Road, Needville, TX 77461",
        "577 County Road 3663, Splendora, Texas 77372"];
    for(i = 0; i < addresses.length; i++){
        geocoder.geocode({address: addresses[i]}, function(results, status) {
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map
            })
        });
    }
}

function addInfoWindow(marker,message){

}