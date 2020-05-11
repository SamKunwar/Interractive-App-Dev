import { Component, OnInit, ViewChild } from '@angular/core';

declare let google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map', {static: true}) mapElement;
  map: any;
  
  constructor() { }

  
  ngOnInit() {
    console.log('ngOnInit MapsPage');

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let infoWindow = new google.maps.InfoWindow({
      content: '<p style="color: black;">2701ICT Headquarters</p>'
      });
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          }
          this.map.setCenter(pos);
          marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
          });
        });
    }else {
      alert("Geolocation not supported!");
    }
  }  
  
      

}
