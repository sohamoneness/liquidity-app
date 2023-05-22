import { HelperProvider } from 'src/app/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { VaultProvider } from 'src/app/services/vault.service';
import { CommonProvider } from 'src/app/services/common.service';

@Component({
  selector: 'app-vaultselected',
  templateUrl: './vaultselected.page.html',
  styleUrls: ['./vaultselected.page.scss'],
})
export class VaultselectedPage implements OnInit {

  liquorMainCategory: any = []; // liquore Main Category
  liquorCategory: any = []; // liquor Category
  vaultCategory: any = []; // vault Category
  vaultCategory_id = ''; // vault Category
  filter_vault_category: any = [];
  categoryItems: any = [];
  allItems: any = [];
  selectedMainCategory: any = 0;
  public userId: any = 0;
  total_price = 0.0;
  vault_selected = '';
  UniqueDeviceids = '12345678';
  cart_length: any = [];
  cart_item = 0;
  total_prices = '';
  final_prices = '';
  vault_category_id = '';
  cart_price = 0;
  vault_selected_item_price = "0";
  price = 0;

  slideOpts = {
    initialSlide: 0,
    speed: 600,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.1,
    autoplay: true,
    loop: true,
  };

  constructor(
    //private userDetails: UserDetailsService,
    private vaultProvider: VaultProvider,
    private commonProvider: CommonProvider,
    private helper: HelperProvider,
    private navCtrl: NavController,
    private _router: Router) {
    //this.addToCart = { carts: [] };
    this.userId = localStorage.getItem('user_id');
  }
   
  slideOpts1 = {
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
  }
  ionViewWillEnter() {
  }

  ngOnInit() {
    this.commonProvider.fetchSubCategories("1").then((res) => {
      if (res["status"] == 1) {
        this.liquorCategory = res["sub_categories"];
      }
    })
    this.getCategoryItem("1");
    let data = {
      "device_id": localStorage.getItem('uniqueDeviceID'),
    }
    this.vaultProvider.getVaultCartDetails(data).then((res) => {
      if (res["status"] == '1') {
        console.log(res);
        this.cart_length = res["cartItems"];
        this.cart_item = this.cart_length.length;
      }
    })
  }


  getCategoryItem(id) {
    this.vaultProvider.fetchVaultProducts(id).then((res) => {
      if (res["status"] == 1) {
        this.categoryItems = res["vault_products"];
      }
    })
  }

  // public cartPrice = 0;
  public radioButtonSelect(categoryItem, valueSelected) {
    console.log(valueSelected);
    this.vault_selected = valueSelected;
    this.cart_price = Number(this.final_prices) * Number(this.vault_selected);

    // if (this.vault_category_id == "") {
    //   this.helper.showErrorCustom("Please select vault category")
    // } else {
    //   this.vault_selected = valueSelected;
    // }

  }

  compareNDreview() {

    if (this.cart_item == 0) {
      this.helper.showErrorCustom('Please select one item and click cart icon for add to cart');
    } else if (this.cart_item >= 1) {
      localStorage.setItem('outletCategory', this.vault_category_id);
      this.navCtrl.navigateForward('/vaultcompare');

    }
  }

  getSelectedBefore(category) {
    return 0;
  }

  select(item) {
    console.log(item);
    this.final_prices = item.price;
    this.vault_category_id = item.vault_category_id;
    this.cart_price = Number(item.price) * Number(this.vault_selected);
    console.log(this.cart_price);
    console.log(this.vault_selected);
  }

  addToCarts(item) {

    console.log('addToCarts', item);
    console.log('vault_selected', this.vault_selected);
    console.log("item>>" + this.cart_item)
    if (this.UniqueDeviceids === "") {
      this.UniqueDeviceids = "12345678";
    } else if (this.vault_category_id == undefined) {
      this.helper.presentAlert("Sorry you did not select the vault category");
    } else if (this.vault_selected == '') {
      this.helper.presentAlert("Sorry you did not select the quantity");
    } else if (this.vault_selected_item_price == '0') {
      this.helper.presentAlert("Sorry you did not select the vault category");
    } else {
      let data = {
        "device_id": localStorage.getItem('uniqueDeviceID'),
        "product_id": item.id,
        "product_name": item.name,
        "price": this.vault_selected_item_price,
        "quantity": this.vault_selected,
        "vault_category_id": this.vault_category_id
      }

      console.log("cartDAta>>"+JSON.stringify(data));

      this.vaultProvider.addToVaultCart(data).then((res) => {
        if (res["status"] == '1') {
          //this.vault_selected_item_price= "0";
          this.helper.suucessAlert(res["message"]);
          console.log(res);
          this.cart_length = res["cartItems"];
          this.cart_item = res["cartItems"].length;
          this.total_prices = res["total_price"];
          //this.compareNDreview();
        }
      })
    }
  }

  /**
   * This method is for displaying category wise products
   * @param response 
   */
  pushDataIntoVaultCATEGORYClass(response) {
    // this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
    this.allItems = response;
    console.log(response);
    this.allItems.forEach((categoryItem) => {
      if (this.allItems.length > 0) {
        let liquorItem = response;
        // pusing the data in to FoodCategory Interface
        this.categoryItems.push({
          counter: 0,
          itemId: categoryItem.id,
          name: categoryItem.name,
          total: categoryItem.total,
          current_price: this.filter_vault_category.price,
          category_id: categoryItem.category_id,
          sub_category_id: categoryItem.sub_category_id,
          vault_categories_id: this.filter_vault_category.vault_category_id,
          vault_category: categoryItem.vault_product_prices,
          image: categoryItem.image

        });
      }
    }
    )
    console.log("addToLiquorItem", this.categoryItems);
  }

  search(){
    this._router.navigate(['/search'])
  }

  selectVaultCategory(event,item,item1){
    console.log("val>>"+event.target.value);
    console.log("selected_item>>"+JSON.stringify(item));
    this.vault_category_id = event.target.value;
    console.log("vault_category_id>>"+this.vault_category_id);
    
    for(let i=0;i<item.length;i++){
      if(this.vault_category_id==item[i].vault_category_id){
        this.price = item[i].price;
        console.log("price_selected>>"+this.price);
        this.vault_selected_item_price = this.price.toString();;
        if (this.UniqueDeviceids === "") {
          this.UniqueDeviceids = "12345678";
        } else if (this.vault_category_id == undefined) {
          this.helper.presentAlert("Sorry you didnot select the vault category");
        }else if (this.vault_category_id == '') {
          this.helper.presentAlert("Sorry you didnot select the vault category");
        } else if (this.vault_selected == '') {
          this.helper.presentAlert("Sorry you didnot select the quantity");
        }  else {
          let data = {
            "device_id": localStorage.getItem('uniqueDeviceID'),
            "product_id": item1.id,
            "product_name": item1.name,
            "price": this.vault_selected_item_price,
            "quantity": this.vault_selected,
            "vault_category_id": this.vault_category_id
          }

          console.log("cartDAta>>"+JSON.stringify(data));

          this.vaultProvider.addToVaultCart(data).then((res) => {
            if (res["status"] == '1') {
              //this.vault_selected_item_price= "0";
              this.helper.suucessAlert(res["message"]);
              console.log(res);
              this.cart_length = res["cartItems"];
              this.cart_item = res["cartItems"].length;
              this.total_prices = res["total_price"];
              //this.compareNDreview();
            }
          })
        }
        //this.vault_selected_item_price = this.price.toString();;
        break;
      }else{
        console.log("nothing match");
      }
    }
    
    //this.cart_price = Number(price) * Number(this.vault_selected);
    // console.log(event.detail.value);
    // this.vault_selected = event.detail.value;
    // this.cart_price = Number(this.final_prices) * Number(this.vault_selected);

    // if (this.vault_category_id == "") {
    //   this.helper.showErrorCustom("Please select vault category")
    // } else {
    //   this.vault_selected = event.detail.value;
    // }
    // console.log(item);
    // this.final_prices = item.price;
    // this.vault_category_id = event.detail.value;
    // this.cart_price = Number(item.price) * Number(this.vault_selected);
    // console.log(this.cart_price);
    // console.log(this.vault_selected);
    //console.log("cartprice>>"+this.cart_price);
  }


}


interface CARTSITEM {
  counter: string,
  itemId: string,
  name: string,
  total: string,
  current_price: string;
  category_id: string,
  sub_category_id: string;
  vault_categories_id: string;
  vault_category: string;
  image: string;
}