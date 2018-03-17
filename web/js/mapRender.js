google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(46, 25),
        zoom: 7,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.MOON,
        /* styles: [
             {
                 "featureType": "administrative",
                 "elementType": "labels",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "administrative.country",
                 "elementType": "geometry.stroke",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "administrative.province",
                 "elementType": "geometry.stroke",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "landscape",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "visibility": "on"
                     },
                     {
                         "color": "#e3e3e3"
                     }
                 ]
             },
             {
                 "featureType": "landscape.natural",
                 "elementType": "labels",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "poi",
                 "elementType": "all",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "all",
                 "stylers": [
                     {
                         "color": "#cccccc",
                         "visibility":"on"
                     }
                 ]
             },
             {
                 "featureType": "road",
                 "elementType": "labels",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "transit",
                 "elementType": "labels.icon",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "transit.line",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "transit.line",
                 "elementType": "labels.text",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "transit.station.airport",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "transit.station.airport",
                 "elementType": "labels",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             },
             {
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [
                     {
                         "color": "#FFFFFF",
                         "visibility":"on"
                     }
                 ]
             },
             {
                 "featureType": "water",
                 "elementType": "labels",
                 "stylers": [
                     {
                         "visibility": "on"
                     }
                 ]
             }
         ], */
    }
    var mapElement = document.getElementById('dc');
    var map = new google.maps.Map(mapElement, mapOptions);

    //setting overlay color, etc.
    map.data.setStyle({
        fillColor: 'white',
        strokeWeight: 0,
        strokeColor: '#448CCB',
        fillOpacity: 1
    });

    // here is the magic
    map.data.loadGeoJson('https://rawgit.com/teopopescu/Romanian-Land/Java-webapp/web/RomaniaJson.json');

    var marker = new google.maps.Marker({map: map, id:"Baia Mare", position: {lat: 44.363, lng: 23.044}, clickable: true});

    marker.info = new google.maps.InfoWindow({
        content: '<b>Speed:</b> '
    });

    google.maps.event.addListener(marker, 'click', function() {
        marker.info.open(map, marker);
    });




}

