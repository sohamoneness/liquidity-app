import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CommonProvider } from '../services/common.service';
import { HelperProvider } from '../services/helper.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-watchlist-fav',
  templateUrl: './watchlist-fav.page.html',
  styleUrls: ['./watchlist-fav.page.scss'],
})
export class WatchlistFavPage implements OnInit {
  public product_name = '';
  public userId = '';
  public shopList= [];
  public addToCart = [];
  public final_cart_value: any = 0;
  public deviceId : any = '';
  public total : any ;

  constructor( private helper : HelperProvider, private navCtrl : NavController, private commonProvider : CommonProvider, private userDetails : UserDetailsService) { }

  ngOnInit() {
    this.product_name = localStorage.getItem("product_name");
    this.userId=localStorage.getItem("user_id");
    let currentPosition = {
      lat : 43.6532,
      long : -79.3832
    };
    let latitude = currentPosition==null?'':currentPosition.lat;
    let longitude = currentPosition==null?'':currentPosition.long;
    this.deviceId = localStorage.getItem('uniqueDeviceID');

    /**
     * api is calling to fetch stores from watchlist of favorite items
     * @param, product name, user id, users' current position
    */
    this.commonProvider.getwatchListForItems(this.product_name,this.userId,latitude,longitude).then((res) => {
      console.log(res);      
      if (res["status"] == 1) {
        this.shopList = res["products"];
        this.shopList.forEach(element => {
          element.count = 0;
        });
      }
    })

    let data = {
      "device_id": this.deviceId, 
    }
    this.userDetails.getCartDetails(data).then((res) => {
      if (res["status"] == '1') {
        console.log('cart',res);
        
      }
    })
  }

  /**
   * This method is for adding item to cart
   * @param item
   */
  pluses(item) {   
    this.final_cart_value = 0;
    this.addToCart= this.addToCart.filter(({ itemId }) => itemId !== item.id); // removing the Duplicasy or 0 selected from Local variable
    // if (item.count==item.stock_count) {
    //   this.helper.presentToast('Out of stock')
    // } else {
      item.count = parseInt(item.count) + 1;
      this.total= String(parseFloat(item.count) * parseFloat(item.current_price));
      // this.addToCart.push({
      //   count: item.count,
      //   itemId: item.itemId,
      //   highest_price: item.highest_price,
      //   name: item.name,
      //   total: String(parseFloat(item.count) * parseFloat(item.current_price)),
      //   current_price: item.current_price,
      //   lowest_price: item.lowest_price,
      //   category_id: item.category_id,
      //   shop_id: item.shop_id,
      //   sub_category_id: item.sub_category_id,
      //   description: item.description,
      // });
    // }
  }

  /**
   * This method is for removing item from cart
   * @param item
   */
  minuses(item) { 
    this.addToCart = this.addToCart.filter(({ itemId }) => itemId !== item.id); // removing the Duplicasy or 0 selected from Local variable
    if (item.count <= 0) { }
    else {
      item.count -= 1;
      this.total= String(parseFloat(item.count) * parseFloat(item.current_price));
    }
  }

  /**
   * This method is for navigate to cart page
  */
  goToaddToCart(item){
    if (item.count!=0) {
      console.log('addToCart',item);
    
      let data = {
        "device_id": this.deviceId,
        "cartProductIds": item.id,
        "cartProductsNames": item.name,
        "cartProductPrices": item.current_price,
        "cartQuantities": item.count,
        "cartIsLiquors": '1' //this.addToCart[0].cartIsLiquors,
      }
      this.commonProvider.addMultipleCartItems(data).then((res) => {
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);
          this.navCtrl.navigateForward('/cart');
        }
        else {
          this.helper.presentAlert(res["message"]);
        }
      })
    }
  }

}
