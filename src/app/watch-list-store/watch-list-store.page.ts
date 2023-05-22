import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonProvider } from '../services/common.service';
import { HelperProvider } from '../services/helper.service';

@Component({
  selector: 'app-watch-list-store',
  templateUrl: './watch-list-store.page.html',
  styleUrls: ['./watch-list-store.page.scss'],
})
export class WatchListStorePage implements OnInit {
  userId = '';
  watchListShop = [];
  imagePath = 'https://liquiditybars.com/backend/assets/upload/shops/';

  constructor( private _helper : HelperProvider, private _api : CommonProvider, private navCtrl : NavController) { }

  ngOnInit() {
    this.userId=localStorage.getItem("user_id");
    this.watchListStore();
  }
  /**
   * Method call to get wishlist of shop
  */
  watchListStore(){
    this._api.getwatchList(this.userId).then(res => {
      console.log(res);
      
      if (res["status"]=='1') {
        this._helper.dismissLoader();
        this.watchListShop = res["stores"]    
      }
    })    
  }

  /**
   * This method is calling for unsave shop from watchlist
   * @param shop id
  */
  unsave(storeId:any){
    /**
    * call api to unsave store
    */
    this._api.deleteFrmfavouriteShop(this.userId,storeId).then(res => {
      if (res["status"]=='1') {
        this.watchListStore();        
      }      
    })
  }

  /**
   * This method is calling to go to outlet menu of shop 
  */
  gotoshopproduct(liquorshopid, item){
    localStorage.setItem("liquorshopid", liquorshopid);
    localStorage.setItem('shopDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/outlet-ordering-menu');
  }

}
