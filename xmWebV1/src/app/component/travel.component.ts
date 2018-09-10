import { Component, OnInit } from '@angular/core';
import { marker } from '../model';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit {
  lat: number = 30.2638032;
  lng: number = 102.8054753;
  stylesArray =[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#F8D9D6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#F8D9D6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9dbdf"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ];

  markers: marker[] = [
	  {
		  lat: 57.70887,
		  lng: 11.97456,
      draggable: true,
      info:"Sweden"
	  },
	  {
		  lat: 41.9027835,
		  lng: 12.4963655,
      draggable: false,
      info:"Italy"
	  },
	  {
		  lat: 41.3850639,
		  lng: 2.1734035,
      draggable: true,
      info:"Spain"
    },
    {
		  lat: 50.0646501,
		  lng: 19.9449799,
      draggable: true,
      info:"Poland"
    },
    {
		  lat: 60.1698557,
		  lng: 24.9383791,
      draggable: true,
      info:"Finland"
    },
    {
		  lat: 59.9138688,
		  lng: 10.7522454,
      draggable: true,
      info:"Norway"
    },
    {
		  lat: 55.6760968,
		  lng: 12.5683372,
      draggable: true,
      info:"Denmark"
    },
    {
		  lat: 47.497912,
		  lng: 19.040235,
      draggable: true,
      info:"Hungary"
    },
    {
		  lat: 48.2081743,
		  lng: 16.3738189,
      draggable: true,
      info:"Austria"
    },
    {
		  lat: 48.856614,
		  lng: 2.3522219,
      draggable: true,
      info:"France"
    },
    {
		  lat: 41.1579438,
		  lng: -8.6291053,
      draggable: true,
      info:"Portugal"
    },
    {
		  lat: 35.0116363,
		  lng: 135.7680294,
      draggable: true,
      info:"Japn"
    },
    {
		  lat: 30.572815,
		  lng: 104.066801,
      draggable: true,
      info:"China"
    },
    {
		  lat: 44.2642998,
		  lng: -109.7869527,
      draggable: true,
      info:"Canada"
    },
    {
		  lat: 1.352083,
		  lng: 103.819836,
      draggable: true,
      info:"Singapore"
    },
    {
		  lat: 3.139003,
		  lng: 101.686855,
      draggable: true,
      info:"Malaysia"
    },
    {
		  lat: -8.4095178,
		  lng: 115.188916,
      draggable: true,
      info:"Indonesia"
    },
    {
		  lat: 22.6158015,
		  lng: 120.7120023,
      draggable: true,
      info:"Tai Wan"
    },
    {
		  lat: 22.198745,
		  lng: 113.543873,
      draggable: true,
      info:"Macau"
    },
    {
		  lat: -37.8136276,
		  lng: 144.9630576,
      draggable: true,
      info:"Australia"
    },
    {
		  lat: -36.8484597,
		  lng: 174.7633315,
      draggable: true,
      info:"New zealand"
    },
    {
		  lat: 41.7151377,
		  lng: 44.827096,
      draggable: true,
      info:"Georgia"
	  }
  ];

  constructor() { }

  ngOnInit() {
  }
  

}
