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





var infoWindow = new google.maps.InfoWindow;

// Change this depending on the name of your PHP or XML file
downloadUrl('https://storage.googleapis.com/mapsdevsite/json/mapmarkers2.xml', function(data) {
    var xml = data.responseXML;
    var markers = xml.documentElement.getElementsByTagName('marker');
    Array.prototype.forEach.call(markers, function(markerElem) {
        var id = markerElem.getAttribute('id');
        var name = markerElem.getAttribute('name');
        var address = markerElem.getAttribute('address');
        var type = markerElem.getAttribute('type');
        var point = new google.maps.LatLng(
            parseFloat(markerElem.getAttribute('lat')),
            parseFloat(markerElem.getAttribute('lng')));

        var infowincontent = document.createElement('div');
        var strong = document.createElement('strong');
        strong.textContent = name
        infowincontent.appendChild(strong);
        infowincontent.appendChild(document.createElement('br'));

        var text = document.createElement('text');
        text.textContent = address
        infowincontent.appendChild(text);
        var icon = customLabel[type] || {};
        var marker = new google.maps.Marker({
            map: map,
            position: point,
            label: icon.label
        });
        marker.addListener('click', function() {
            infoWindow.setContent(infowincontent);
            infoWindow.open(map, marker);
        });
    });
});
}



function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
        }
    };

    request.open('GET', url, true);
    request.send(null);
}

function doNothing() {}

var customLabel = {
    restaurant: {
        label: 'R'
    },
    bar: {
        label: 'B'
    }
};