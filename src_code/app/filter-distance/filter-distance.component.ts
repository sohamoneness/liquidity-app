import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-filter-distance',
  templateUrl: './filter-distance.component.html',
  styleUrls: ['./filter-distance.component.scss'],
})
export class FilterDistanceComponent implements OnInit {

  distanceArray = [
    {name : '5 KM', value : 5},
    {name : '10 KM', value : 10},
    {name: '15 KM', value : 15},
    {name : '20 KM', value : 20},
    {name : '25 KM', value:25},
    {name:'30 KM', value:30},
    {name : '35 KM', value:35},
    {name : '40 KM', value:40},
    {name : '45 KM', value:45},
    {name : '50 KM', value:50}];
  constructor( private modalController : ModalController, private navCtrl : NavController) { }

  ngOnInit() {}

  chooseDistance(distance){
    console.log('d='+distance);
    localStorage.setItem('setDistance',distance)
    this.modalController.dismiss();
    this.navCtrl.navigateForward('/filter-distance-result');
    
  }

  /**
   * This method is calling for close modal
  */
  close(){
    this.modalController.dismiss();
  }
}
