import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { CommonProvider } from '../services/common.service';
import { HelperProvider } from '../services/helper.service';

declare var google: any;

@Component({
  selector: 'app-filter-distance-result',
  templateUrl: './filter-distance-result.page.html',
  styleUrls: ['./filter-distance-result.page.scss'],
})
export class FilterDistanceResultPage implements OnInit {
  view: any;
	buttonIcon: string = "list";
  shopList : any = [];
  imagePath = environment.production;
  map: any;
  infoWindows: any = [];
  markers: any = [];
  userId : any = '';
  mapMarkers : any = {};
  showMarker = false;

	constructor( private _helper : HelperProvider, private _api : CommonProvider, private router : Router, private navCtrl : NavController) {
		this.view = 'map';
  }

  ngOnInit() {
    
    this.userId=localStorage.getItem("user_id");
    this.fetchNearByResturents();
    
  }

  @ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef;
  


  /**
   * this method is calling for getting shop list filter by distance
  */

  fetchNearByResturents() {
    // get distance choose by user
    let getDistance = localStorage.getItem('setDistance');
      
    // get latitude and longitude of user
    // let currentPosition = JSON.parse(localStorage.getItem('currentAddress'));
    let currentPosition = {
      lat : 43.6532,
      long : -79.3832
    };
    console.log('currentPosition',currentPosition);
    if (currentPosition==null) {
      
    } else {
      this._api.getDistanceResult(this.userId, currentPosition.lat, currentPosition.long,getDistance).then((res) => {
        console.log(res);
        if (res["status"]=='1') {
          this._helper.dismissLoader();
          this.shopList = res["shops"];
          this.markers = this.shopList;
          console.log('shopList', this.shopList);
          
          this.showMap();
          
        } else {
          
        }
        
      })
    }
  }
 
  
  /**
   * This method is calling for change view of the page(List / Map)
  */
  changeView(){
    if(this.view == 'map'){
      this.view = 'list';
      this.buttonIcon = "map-outline";
    }else{
      this.view = 'map';
      this.buttonIcon = "list";
      this.fetchNearByResturents();
    }
  }
   

   
  /**
   * This method is calling for handling the map view in page
  */
  showMap() {
    // const location = new google.maps.LatLng(-37.3,144.3);
    let currentPosition = {
      lat : 43.6532,
      long : -79.3832
    };
		console.log(currentPosition);		
		const location = new google.maps.LatLng(currentPosition.lat, currentPosition.long);
		const icon = {
			url: '../assets/icon/map_icon.png', // image url
			scaledSize: new google.maps.Size(30, 30), // scaled size
		};
		
		const options = {
			center: location,
			zoom: 18,
			DisableDefaultUI: true,
			icon: icon
		}
		this.map = new google.maps.Map(this.mapRef.nativeElement, options);
		this.addMarkersToMap(this.markers)
  }

  /**
   * This method is calling for add markeers in map view 
  */

  addMarkersToMap(markers) {
    for(let marker of markers ) {
      let iconBase = '../assets/icon/map_icon.png';
      let position = new google.maps.LatLng(marker.lat, marker.lng);
      
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.name,
        latitude: marker.lat,
        longitude: marker.lng,
        address: marker.address,
        distance: marker.distance,
        image: marker.image,
        icon: iconBase,
        id: marker.id
      });
    
      mapMarker.setMap(this.map);
      this.addInfoWindowsToMap(mapMarker);
    }
  }

  /**
   * This method is calling for adding infomation of marker in map view 
  */
  
  addInfoWindowsToMap(marker) {
    let infoWindowContent = '<ion-item>' +
      '<ion-thumbnail slot="start">' +
      '<ion-img src="'+ marker.image +'"></ion-img>' +
      '</ion-thumbnail>' +
      '<ion-label >' +
      '<h4 onClick="gotoshopproduct(marker.id, marker)">'+ marker.title +'</h4>' +
      '<p>'+ marker.address +'</p>' +
      '<small>'+ marker.distance +'</small>' +
      '</ion-label>' +
      '</ion-item>';

      
    
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      console.log('click');
      this.showMarker = true;
      this.mapMarkers = marker;
      //infoWindow.open(this.map, marker);
    });
    
    this.infoWindows.push(infoWindow);
  }
   
   /**
   * This method is calling for closing infomation of marker in map view 
  */
  closeAllInfoWindows() {    
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  /**
   * This method is calling for save shop in watchlist or unsave shop from watchlist
   * @param shop id, watchlist(0,1)
  */
  save(storeId:any, watchList){
    if (watchList==0) {
      this._helper.presentLoading();
      /**
      * call api to save store
      */
      this._api.favouriteShop(this.userId,storeId).then(res => {
        if (res["status"]=='1') {
          this._helper.dismissLoader();
          this.fetchNearByResturents();        
        } else {
          
        }
        
      })
    }else{
      /**
      * call api to unsave store
      */
      this._api.deleteFrmfavouriteShop(this.userId,storeId).then(res => {
        if (res["status"]=='1') {
          this.fetchNearByResturents();        
        } else {
          
        }
        
      })
    }
  }

  /**
   * This method is calling to go to outlet menu of shop 
  */
  gotoshopproduct(liquorshopid, item){
    localStorage.setItem("liquorshopid", liquorshopid);
    localStorage.setItem('shopDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/outlet-ordering-menu');
  }
  /**
   * This method is calling for show distance from user to shop in map view 
  */
  closeWindow(){
    this.showMarker=false;
  }

  gotoDetials(liquorshopid){
    let item = this.shopList.find(el=>el.id == liquorshopid )
    

    localStorage.setItem("liquorshopid", liquorshopid);
    localStorage.setItem('shopDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/outlet-ordering-menu');
  }
}
   