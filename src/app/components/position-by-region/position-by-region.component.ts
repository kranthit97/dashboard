import { Component, AfterViewInit,OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-position-by-region',
  templateUrl: './position-by-region.component.html',
  styleUrls: ['./position-by-region.component.scss']
})
export class PositionByRegionComponent implements OnInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef | undefined;
  map: google.maps.Map | undefined;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {    
    center: this.coordinates,
    zoom: 8,
  };
 
  marker = new google.maps.Marker({});
  constructor() { 
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
  }

  ngOnInit(): void {
  } 

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    // var myLatLng = {
    //   lat: 43.6222102,
    //   lng: -79.6694881
    // };
  
    // var map = new google.maps.Map(this.gmap, {
    //   zoom: 15,
    //   center: myLatLng
    // });
  
    // var marker = new google.maps.Marker({
    //   position: myLatLng,
    //   map: map,
    // });
    if(this.gmap)
      this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    if(this.map)
      this.marker.setMap(this.map);
   }

}
