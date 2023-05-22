import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CommonProvider } from '../services/common.service';
import { HelperProvider } from '../services/helper.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  userId = '';
  fvrtList = [];

  constructor( private _helper : HelperProvider, private _api : CommonProvider, private navCtrl : NavController) { }

  ngOnInit() {
    this.userId=localStorage.getItem("user_id");
    this.favListProduct();
    localStorage.removeItem("product_name");
  }
  /**
   * Method call to get favlist of product
  */
  favListProduct(){
    this._api.getfavouriteList(this.userId).then(res => {
      console.log(res);      
      if (res["status"]=='1') {
        this._helper.dismissLoader();
        this.fvrtList = res["items"]    
      }
    })    
  }

  /**
   * This method is calling for unsave product  from favourite List
   * @param product id
  */
  gotounsave(productId:any){
    /**
    * call api to unsave store
    */
    this._api.deleteFrmfavouriteProducts(this.userId,productId).then(res => {
      if (res["status"]=='1') {
        this.favListProduct();        
      }      
    })
  }
  /**
   * This method is calling to go to watchList page 
   * @param product name
  */
  gotoshop(name : any){
    localStorage.setItem("product_name",name);
    this.navCtrl.navigateForward('/watchlist-fav');
  }

}