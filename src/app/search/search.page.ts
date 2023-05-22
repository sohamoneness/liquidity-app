import { Component, OnInit } from '@angular/core';
import { HelperProvider } from 'src/app/services/helper.service';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonProvider } from 'src/app/services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  products = [];
  products1 = [];
  shopList = [];
  txt = '';
  userId = '';
  searchHistory = [];
  imagePath = 'https://liquiditybars.com/backend/assets/upload/shops/';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router: Router,
    private commonProvider : CommonProvider
  ) { }

  ngOnInit() {
    // this.commonProvider.getSearchProducts().then((res) => {
    //   if (res["status"] == 1) {
    //     this.products = res["products"];
    //     this.products1 = this.products;
    //   }
    // })
    this.userId=localStorage.getItem("user_id");
    this.getsearchHistory();   
  }

  /**
   * method is call to fetch serch history data
  */
  getsearchHistory(){
    this.commonProvider.getUserSearchHistory(this.userId).then(res=>{
      if (res["status"] == 1) {
        this.searchHistory = res["user_search_keywords"];
      }
    })
  }

  // search() {
  //   console.log('products1',this.products1);
  //   console.log("txt length"+this.txt)
  //   this.products1 = [];
  //   if (this.txt.length > 2) {
  //     console.log("txt>>"+this.txt)
  //     for (let i = 0; i < this.products.length; i++) {
  //       let name = this.products[i].name.toLowerCase();
  //        console.log('products1',this.products1);
        
  //       if (name.indexOf(this.txt.toLowerCase()) != -1) {
  //         this.products1.push(this.products[i]);
  //       }
  //     }
  //     this.products1 = this.products.filter((item) => {
  //       return (item.name.toLowerCase().indexOf(this.txt.toLowerCase()) > -1);
  //     })
  //     console.log('products1',this.products1);
  //   } else{ //if (this.txt.length == 0) {
  //     console.log('else products1',this.products);
  //     this.products1 = this.products;
  //   }
  // }

  /**
   * method is calling to search products or store
   */
  search(){
    if (this.txt!='') {
      let currentPosition = {
        lat : 43.6532,
        long : -79.3832
      };
      this.commonProvider.getSearchResult(this.txt,this.userId,currentPosition.lat, currentPosition.long).then(res=>{
        if (res["status"]==1) {
          this.shopList = res["stores"];
          this.products1 = res["items"];
          this.searchHistory = [];
        } else {
          
        }      
      })
    }
  }

  /**
   * method is calling to search products from searchHistory
  */
  oldSearch(itemData){
    this.txt = itemData;
    this.search();
  }


  /**
   * method is calling to go to store list of this particular product page
   * @ param item(product)
  */
  gotoSearchDetails(item){    
    localStorage.setItem('product_name', item.name);
    this.navCtrl.navigateForward('/searchresult');
  }

  /**
   * method is calling to delete search keyword
   * @param keyword id
   */
  delete(keyId){
    this.commonProvider.deleteKeyWord(keyId).then(res=>{
      console.log(res);
      if (res["status"] == 1) {
        this.getsearchHistory();
      }
    })
  }

  /**
   * This method is calling for save shop in watchlist or unsave shop from watchlist
   * @param shop id, watchlist(0,1)
  */
  save(storeId:any, watchList){
    if (watchList==0) {
      this.helper.presentLoading();
      /**
      * call api to save store
      */
      this.commonProvider.favouriteShop(this.userId,storeId).then(res => {
        if (res["status"]=='1') {
          this.helper.dismissLoader();
          this.search();        
        } else {
          
        }
        
      })
    }else{
      /**
      * call api to unsave store
      */
      this.commonProvider.deleteFrmfavouriteShop(this.userId,storeId).then(res => {
        if (res["status"]=='1') {
          this.search();        
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
   * This method is for add favorite product 
   * @param productId
   */
  addToFavrite(productId : any,is_fav) {
    if (is_fav==0) {
      this.commonProvider.favouriteProducts(this.userId,productId).then(res=>{
        console.log(res);
        if (res["status"]=='1') {
          this.helper.dismissLoader();
          this.search();        
        }     
      })
    }else{
    /**
    * call api to unsave product
    */
      this.commonProvider.deleteFrmfavouriteProducts(this.userId,productId).then(res => {
        if (res["status"]=='1') {
          this.search();        
        } else {
          
        }        
      })
    }
  }


}
