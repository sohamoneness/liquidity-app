import { Component, OnInit } from '@angular/core';
import { HelperProvider } from 'src/app/services/helper.service';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonProvider } from 'src/app/services/common.service';

@Component({
  selector: 'app-outletmenu',
  templateUrl: './outletmenu.page.html',
  styleUrls: ['./outletmenu.page.scss'],
})
export class OutletmenuPage implements OnInit {

  device_id = '';
  shopName = '';
  liquorCategory = [];
  liquorshopid = '';
  sections = '';
  drinks = '';
  all_liquor = [];
  cartProductsNames = '';
  cartProductPrices = '';
  cartIsLiquors = '';
  cartQuantities = '';
  cartProductIds = '';
  scotch = '';
  userId='';
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router: Router,
    private commonProvider: CommonProvider
  ) {
    // this.device_id = localStorage.getItem("uniqueDeviceID");
    // this.addToCart = { carts: [] };
    // this.addToLiquorItem = { liquorItem: [] }; // Store the Liquor DATA
    // // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart
    // this.shopName = JSON.parse(localStorage.getItem('shopDetails')).name;
  }

  
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 1,
    centeredSlides: true,
    loop: false,
  }

  ngOnInit() {
    this.device_id = localStorage.getItem("uniqueDeviceID");
    this.addToCart = { carts: [] };
    this.addToLiquorItem = { liquorItem: [] }; // Store the Liquor DATA
    // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart
    this.shopName = JSON.parse(localStorage.getItem('shopDetails')).name;
    this.userId=localStorage.getItem("user_id");

    this.drinks = 'liquor';
    this.commonProvider.fetchSubCategories("1").then((res) => {
      if (res["status"] == 1) {
        this.liquorCategory = res["sub_categories"];

      }
    })

    this.commonProvider.clearCart(this.device_id).then((res) => {
      if (res["status"] == 1) {
        
      }
    })
    this.LiquorSections();
  }

  /**
   * This method is for loading food section products
   * @param category_id 
   */
  FoodSection() {
    this.sections = "1";
    this.liquorshopid = localStorage.getItem("liquorshopid");

    this.commonProvider.fetchOtherProductsByCategory("2", this.liquorshopid, this.userId).then((res) => {
      if (res["status"] == 1) {
        // this.all_liquor_categorywise = res["products"];
        console.log(res["products"]);
        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
          elem1;
          this.addToCart.carts.forEach((elem2, index) => {
            elem2;
            if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
              console.log(this.addToLiquorItem.liquorItem)
              index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
              this.addToLiquorItem.liquorItem[index].counter = elem2.counter;

            }
          });
        });

      }
    })
  }

  /**
   * This method is for loading liquor section products
   * @param category_id 
   */
  LiquorSections() {
    this.drinks = 'liquor';
    this.sections = "0";
    this.liquorshopid = localStorage.getItem("liquorshopid");

    this.commonProvider.fetchOtherProductsByCategory("1", this.liquorshopid, this.userId).then((res) => {
      if (res["status"] == 1) {

        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
          elem1;
          this.addToCart.carts.forEach((elem2, index) => {
            elem2;
            if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
              console.log(this.addToLiquorItem.liquorItem)
              index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
              this.addToLiquorItem.liquorItem[index].counter = elem2.counter;

            }
          });
        });

      }
    })
  }

  /**
   * This method is for loading soft bevarage section products
   * @param category_id 
   */
  SoftSection() {
    this.sections = "2";
    this.liquorshopid = localStorage.getItem("liquorshopid");

    this.commonProvider.fetchOtherProductsByCategory("3", this.liquorshopid, this.userId).then((res) => {
      if (res["status"] == 1) {

        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
          elem1;
          this.addToCart.carts.forEach((elem2, index) => {
            elem2;
            if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
              console.log(this.addToLiquorItem.liquorItem)
              index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
              this.addToLiquorItem.liquorItem[index].counter = elem2.counter;

            }
          });
        });

      }
    })
  }

  /**
   * This method is for loading combo section products
   * @param category_id 
   */
  ComboSection() {
   this.sections = "3";
    this.liquorshopid = localStorage.getItem("liquorshopid");

    this.commonProvider.fetchOtherProductsByCategory("4", this.liquorshopid, this.userId).then((res) => {
      if (res["status"] == 1) {

        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
          elem1;
          this.addToCart.carts.forEach((elem2, index) => {
            elem2;
            if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
              console.log(this.addToLiquorItem.liquorItem)
              index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
              this.addToLiquorItem.liquorItem[index].counter = elem2.counter;

            }
          });
        });

      }
    })
  }

  /**
   * This method is for adding item to cart
   * @param item
   */
  plusss(item) { 
    console.log('item',item);
    
    this.final_cart_value = 0;
    this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
    if (item.counter <= 0) { }
    else {
      item.counter -= 1;
      this.addToCart.carts.push({
        counter: item.counter,
        itemId: item.itemId,
        highest_price: item.highest_price,
        name: item.name,
        total: String(parseFloat(item.counter) * parseFloat(item.current_price)),
        // total:String( parseFloat(item.counter) * parseFloat(item.total)),
        current_price: item.current_price,
        lowest_price: item.lowest_price,
        category_id: item.category_id,
        shop_id: item.shop_id,
        sub_category_id: item.sub_category_id,
        description: item.description,
        food_total: String(parseFloat(item.counter) * parseFloat(item.food_price)),
        food_price: item.food_price,
        is_fav:item.is_fav

      });
    }
    let calculatePrice = 0;

    this.addToCart.carts.forEach(function (value) {
      if (value.category_id === "1") {
        calculatePrice += value.counter * parseFloat(value.current_price);
      } else if (value.category_id != "1") {
        calculatePrice += value.counter * parseFloat(value.food_price);
      }
    });
    this.final_cart_value = calculatePrice;
    console.log(">>>", this.addToCart.carts)
  }

  

  public final_cart_value: any = 0;
  /**
   * This method is for removing item from cart
   * @param item
   */
  minusss(item) {   
    console.log(item)
    this.final_cart_value = 0;
    this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
    item.counter = parseInt(item.counter) + 1;
    this.addToCart.carts.push({
      counter: item.counter,
      itemId: item.itemId,
      highest_price: item.highest_price,
      name: item.name,
      total: String(parseFloat(item.counter) * parseFloat(item.current_price)),
      // total:String( parseFloat(item.counter) * parseFloat(item.total)),
      current_price: item.current_price,
      lowest_price: item.lowest_price,
      category_id: item.category_id,
      shop_id: item.shop_id,
      sub_category_id: item.sub_category_id,
      description: item.description,
      food_total: String(parseFloat(item.counter) * parseFloat(item.food_price)),
      food_price: item.food_price,
      is_fav : item.is_fav
    });
    let calculatePrice = 0;
    // if(this.sections==="0"){
    this.addToCart.carts.forEach(function (value) {
      if (value.category_id === "1") {
        calculatePrice += value.counter * parseFloat(value.current_price);
      } else if (value.category_id != "1") {
        calculatePrice += value.counter * parseFloat(value.food_price);
      }
    });
    this.final_cart_value = calculatePrice;
  }

  liquorSegmentPremium(item) {
    //this.scotch=item.categoryName;
    this.commonProvider.fetchProducts(item.id, this.liquorshopid).then((res) => {
      if (res["status"] == 1) {
        //this.all_liquor_categorywise = res["products"];
        //console.log(this.all_liquor_categorywise);
        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
          elem1;
          this.addToCart.carts.forEach((elem2, index) => {
            elem2;
            if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
              console.log(this.addToLiquorItem.liquorItem)
              index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
              this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
              console.log("counter", index)
            }
            else {


            }
          });
        });

      }
    })
  }

  /**
   * This method is for navigate to cart page
   */
  gotoCart() {
    this.cartProductIds = '';
    this.cartProductsNames = '';
    this.cartProductPrices = '';
    this.cartQuantities = '';
    this.cartIsLiquors = '';

    localStorage.setItem("totalCartValue", this.final_cart_value);
    // Put the object into storage
    console.log(this.addToCart.carts);
    localStorage.setItem('cartItem', JSON.stringify(this.addToCart.carts));

    for(let i=0;i<this.addToCart.carts.length;i++){
      let is_liquor = '0';
      if(this.addToCart.carts[i].category_id=='1'){
        is_liquor = '1';
      }else{
        is_liquor = '0';
      }
      if(this.cartProductsNames!=''){
        this.cartProductsNames+='*'+this.addToCart.carts[i].name;
      }else{
        this.cartProductsNames+=this.addToCart.carts[i].name;
      }

      if(this.cartProductIds!=''){
        this.cartProductIds+='*'+this.addToCart.carts[i].itemId;
      }else{
        this.cartProductIds+=this.addToCart.carts[i].itemId;
      }

      if(this.cartQuantities!=''){
        this.cartQuantities+='*'+this.addToCart.carts[i].counter;
      }else{
        this.cartQuantities+=this.addToCart.carts[i].counter;
      }

      if(this.cartProductPrices!=''){
        this.cartProductPrices+='*'+this.addToCart.carts[i].current_price;
      }else{
        this.cartProductPrices+=this.addToCart.carts[i].current_price;
      }

      if(this.cartIsLiquors!=''){
        this.cartIsLiquors+='*'+is_liquor;
      }else{
        this.cartIsLiquors+=is_liquor;
      }
    }

    console.log('cart',this.cartQuantities);
    if (this.cartQuantities == '') {
      this.helper.presentAlert('Please add a item');
    }else{
      console.log("cartProductsNames>>"+this.cartProductsNames);
      let data = {
        "device_id": this.device_id,
        "cartProductIds": this.cartProductIds,
        "cartProductsNames": this.cartProductsNames,
        "cartProductPrices": this.cartProductPrices,
        "cartQuantities": this.cartQuantities,
        "cartIsLiquors": this.cartIsLiquors,
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
    //this.navCtrl.navigateForward('/cart');
  }

  addToCompare(item){
    localStorage.setItem("product_name",item.name);
    this.navCtrl.navigateForward('/compare');
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
          this.LiquorSections();        
        }     
      })
    }else{
    /**
    * call api to unsave product
    */
      this.commonProvider.deleteFrmfavouriteProducts(this.userId,productId).then(res => {
        if (res["status"]=='1') {
          this.LiquorSections();        
        } else {
          
        }        
      })
    }
  }

  /**
   * This method is for storing product data and arrange the array
   * @param response
   */
  pushDataIntoLiquorCATEGORYClass(response) {
    this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
    this.all_liquor = response.products;
    console.log(this.all_liquor);
    this.all_liquor.forEach((categoryResponse) => {
      if (this.all_liquor.length > 0) {
        let liquorItem = response;
        // pusing the data in to FoodCategory Interface
        this.addToLiquorItem.liquorItem.push({
          counter: 0,
          itemId: categoryResponse.id,
          highest_price: categoryResponse.highest_price,
          name: categoryResponse.name,
          total: categoryResponse.total,
          current_price: categoryResponse.current_price,
          lowest_price: categoryResponse.lowest_price,
          category_id: categoryResponse.category_id,
          shop_id: categoryResponse.shop_id,
          sub_category_id: categoryResponse.sub_category_id,
          description: categoryResponse.description,
          food_total: categoryResponse.food_total,
          food_price: categoryResponse.price,
          is_fav : categoryResponse.is_fav
        });
      }
    }
    )
    console.log("addToLiquorItem", this.addToLiquorItem.liquorItem);
  }

  public addToCart: {
    carts: CARTSITEM[];
  };

  public addToLiquorItem: { liquorItem: CARTSITEM[]; };
}

  

interface CARTSITEM {
  counter: number,
  itemId: string,
  highest_price: string,
  name: string,
  total: string,
  current_price: string;
  lowest_price: string;
  category_id: string,
  shop_id: string;
  sub_category_id: string;
  description: string;
  food_total: string;
  food_price: string;
  is_fav : number

}
