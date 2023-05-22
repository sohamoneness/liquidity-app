import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-outlethome',
  templateUrl: './outlethome.page.html',
  styleUrls: ['./outlethome.page.scss'],
})
export class OutlethomePage implements OnInit {
  liquor :any =[];
  all_liquor =[];
  all_liquor_category :any =[];
  all_liquor_categorywise :any =[];
  liquorshopid='';
  liquor_quantity_unit :any =[];
  cartPrice :any =[];
  cartTotal_unit0 :any =[];
  cartTotal_unit25 :any =[];
  cartTotal_unit50 :any =[];
  liquorName :any =[];
  count_CartItem=0;
  final_cart_price =0;
  final_cart_count =0;
  checkout :any =[];
  checkout_final :any =[];
  cart_items:any =[];
  items_count=0;
  cart_price =0;
  final_cart_items :any =[];
  update_cart :any =[];
  liquorCategory :any =[];
  drinks :any =[];
  scotch:any =[];
  all_sub_categories:any =[];
  UniqueDeviceids='12345678';
  food :any =[];
  sub_categories:any =[];
  sections='';
  shopDetails :any =[];
  shopName :any =[];

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router : Router,
    private uniqueDeviceID: UniqueDeviceID,
  ) { 
    this.drinks='liquor';
    this.addToCart = {carts: []};
    this.addToFoodItem = {foodItem: []}; // Store the Food DATA
    this.addToFoodCart = {foodCart : []}; // add To Food Cart
    this.addToLiquorItem = {liquorItem: []}; // Store the Liquor DATA
    // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart
    this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
      console.log('shopDetails: ', this.shopDetails);
      this.shopName=this.shopDetails.name;
  }


  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceids = uuid;
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceids = "Error! ${error}";
      });
  }
    cart(){
      this.navCtrl.navigateForward('/cart')
  }
  FoodSection(){
    this.sections="1";
    this.liquorshopid=localStorage.getItem("liquorshopid");

    this.userDetails.fetchOtherProductsByCategory("2",this.liquorshopid).then((res) => {
      if (res["status"]==1) {
        this.all_liquor_categorywise = res["products"];
        console.log(res["products"]);
        this.pushDataIntoLiquorCATEGORYClass(res);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {elem1;
          this.addToCart.carts.forEach((elem2, index) => {elem2;
            if(elem1.itemId=== elem2.itemId && elem1.category_id=== elem2.category_id )
            {
             console.log(this.addToLiquorItem.liquorItem)
            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId ===elem2.itemId);
            this.addToLiquorItem.liquorItem[index].counter=elem2.counter;
            console.log("counter",index);
            console.log(this.addToCart.carts);
            console.log(this.addToLiquorItem.liquorItem)
            }
            else{
              
              console.log(this.addToCart.carts);
              console.log(this.addToLiquorItem.liquorItem)
            }
          });
        });


    console.log(this.addToCart.carts);
    console.log(this.addToLiquorItem.liquorItem)
      }
    })
  }

  LiquorSections(){
    this.drinks='liquor';

    this.sections="0";
    this.liquorshopid=localStorage.getItem("liquorshopid");

    this.userDetails.fetchProducts("1",this.liquorshopid).then((res) => {
      if (res["status"]==1) {
        this.all_liquor_categorywise = res["products"];
        console.log(this.all_liquor_categorywise);
        this.pushDataIntoLiquorCATEGORYClass(res);
        console.log("<<<<<<<<<<<<>>>>>>>>>>>>>",this.addToLiquorItem.liquorItem);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {elem1;
          this.addToCart.carts.forEach((elem2, index) => {elem2;
            if(elem1.itemId=== elem2.itemId && elem1.category_id=== elem2.category_id )
            {
             console.log(this.addToLiquorItem.liquorItem)
            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId ===elem2.itemId);
            this.addToLiquorItem.liquorItem[index].counter=elem2.counter;
            console.log("counter",index);
            console.log(this.addToCart.carts);
            console.log(this.addToLiquorItem.liquorItem)
            }
            else{
              
              console.log(this.addToCart.carts);
              console.log(this.addToLiquorItem.liquorItem)
            }
          });
        });


    console.log(this.addToCart.carts);
    console.log(this.addToLiquorItem.liquorItem)
      }
    })
  }

  SoftSection(){

    this.sections="2";
    this.liquorshopid=localStorage.getItem("liquorshopid");

    this.userDetails.fetchOtherProductsByCategory("3",this.liquorshopid).then((res) => {
      if (res["status"]==1) {
        this.all_liquor_categorywise = res["products"];
        console.log(this.all_liquor_categorywise);
        this.pushDataIntoLiquorCATEGORYClass(res);
        console.log("<<<<<<<<<<<<>>>>>>>>>>>>>",this.addToLiquorItem.liquorItem);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {elem1;
          this.addToCart.carts.forEach((elem2, index) => {elem2;
            if(elem1.itemId=== elem2.itemId && elem1.category_id=== elem2.category_id )
            {
             console.log(this.addToLiquorItem.liquorItem)
            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId ===elem2.itemId);
            this.addToLiquorItem.liquorItem[index].counter=elem2.counter;
            console.log("counter",index);
            console.log(this.addToCart.carts);
            console.log(this.addToLiquorItem.liquorItem)
            }
            else{
              
              console.log(this.addToCart.carts);
              console.log(this.addToLiquorItem.liquorItem)
            }
          });
        });


    console.log(this.addToCart.carts);
    console.log(this.addToLiquorItem.liquorItem)
      }
    })
  }

  ComboSection(){

    this.sections="3";
    this.liquorshopid=localStorage.getItem("liquorshopid");

    this.userDetails.fetchOtherProductsByCategory("4",this.liquorshopid).then((res) => {
      if (res["status"]==1) {
        this.all_liquor_categorywise = res["products"];
        console.log(this.all_liquor_categorywise);
        this.pushDataIntoLiquorCATEGORYClass(res);
        console.log("<<<<<<<<<<<<>>>>>>>>>>>>>",this.addToLiquorItem.liquorItem);

        this.addToLiquorItem.liquorItem.forEach((elem1, index) => {elem1;
          this.addToCart.carts.forEach((elem2, index) => {elem2;
            if(elem1.itemId=== elem2.itemId && elem1.category_id=== elem2.category_id )
            {
             console.log(this.addToLiquorItem.liquorItem)
            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId ===elem2.itemId);
            this.addToLiquorItem.liquorItem[index].counter=elem2.counter;
            console.log("counter",index);
            console.log(this.addToCart.carts);
            console.log(this.addToLiquorItem.liquorItem)
            }
            else{
              
              console.log(this.addToCart.carts);
              console.log(this.addToLiquorItem.liquorItem)
            }
          });
        });


    console.log(this.addToCart.carts);
    console.log(this.addToLiquorItem.liquorItem)
      }
    })
  }




  ngOnInit() {
    
    this.liquorshopid=localStorage.getItem("liquorshopid");

    this.userDetails.fetchCategories().then((res) => {
      if (res["status"]==1) {
        // this.all_categories = res["categories"];
        console.log(res);
      }
    })
    this.userDetails.fetchSubCategories("1").then((res) => {
      if (res["status"]==1) {
        this.liquorCategory = res["sub_categories"];
        this.scotch=this.liquorCategory[0].name;
        console.log(this.scotch);
      }
    })
    this.userDetails.fetchProducts("1",this.liquorshopid).then((res) => {
      if (res["status"]==1) {
        this.all_liquor_categorywise = res["products"];
        console.log(this.all_liquor_categorywise);
        this.sections="0";
        this.pushDataIntoLiquorCATEGORYClass(res);
        console.log("<<<<<<<<<<<<>>>>>>>>>>>>>",this.addToLiquorItem.liquorItem);
      }
    })







    /*---------------------------------------------The End------------------------------------------------*/ 
    console.log(">>>",this.liquorshopid);
  	this.userDetails.getLiquorData(this.liquorshopid).subscribe(
      data => {
          this.all_liquor = data;
          console.log(data)
          this.helper.dismissLoader();
      },
      err => {
          console.log(err);
          this.helper.dismissLoader();
      }
  );
  this.userDetails.getLiquorList().subscribe(
    data => {
        this.all_liquor_category = data;
        console.log(data)
        this.helper.dismissLoader();
    },
    err => {
        console.log(err);
        this.helper.dismissLoader();
    }
);

let uId = this.authService.getUserId();

this.userDetails.getCartData(uId).subscribe(
  data => {
      this.cart_items = data;
      console.log(data)
      this.helper.dismissLoader();
      console.log(">>>>>>>",this.cart_items.length)

  },
  err => {
      console.log(err);
      this.helper.dismissLoader();
  }
);

this.userDetails.getAllliquorCategory().subscribe(
  data => {
      // this.liquorCategory = data;
      // console.log('liquorCategory',this.liquorCategory)
      this.helper.dismissLoader();

  },
  err => {
      console.log(err);
      this.helper.dismissLoader();
  }
);

this.userDetails.fetchFoodBycategory('allFood', this.liquorshopid).subscribe(
  (data) => {
    this.helper.dismissLoader();
    // this.all_liquor_categorywise = data;  
    console.log('liquor Premium data.................',data);
  },
  (err) => {
    console.log(err);
    this.helper.dismissLoader();
  }
);

this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid,"1611290839").subscribe(
  (data) => {
    this.helper.dismissLoader();
    this.all_liquor_categorywise = data; 
    // this.all_liquor_categorywise.forEach(element => {
    //   this.all_liquor_categorywise[element].push({
    //     counterrrr:"500"
    //   })
    // });
    // this.final_items=this.all_liquor_categorywise;
    // console.log(this.final_items);
    console.log('liquor Premium data.................',this.all_liquor_categorywise);
  },
  (err) => {
    console.log(err);
    this.helper.dismissLoader();
  }
);
}


        liquorSegmentPremium(item){
          this.scotch=item.categoryName;
          this.userDetails.fetchProducts(item.id,this.liquorshopid).then((res) => {
            if (res["status"]==1) {
              this.all_liquor_categorywise = res["products"];
              console.log(this.all_liquor_categorywise);
              this.pushDataIntoLiquorCATEGORYClass(res);

              this.addToLiquorItem.liquorItem.forEach((elem1, index) => {elem1;
                this.addToCart.carts.forEach((elem2, index) => {elem2;
                  if(elem1.itemId=== elem2.itemId && elem1.category_id=== elem2.category_id )
                  {
                   console.log(this.addToLiquorItem.liquorItem)
                  index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId ===elem2.itemId);
                  this.addToLiquorItem.liquorItem[index].counter=elem2.counter;
                  console.log("counter",index)
                  }
                  else{
                    

                  }
                });
              });


          console.log(this.addToCart.carts);
          console.log(this.addToLiquorItem.liquorItem)
            }
          })
        }


        public optionsliquorShopOwner(value, index:number) { //here item is an object
      }

        checkout_btn(){
          let uId = this.authService.getUserId();
          localStorage.setItem("user_id",uId);
          this.userDetails.getCartData(uId).subscribe(
          data => {
              this.cart_items = data;
              console.log(data)
              console.log("arrLength>>",this.cart_items.length)
              this.helper.dismissLoader();
          },
          err => {
              console.log(err);
              this.helper.dismissLoader();
          }
      );
      if (this.cart_items.length==0) {
        this.authService.addCart(uId,this.checkout_final,this.final_cart_price); 
          this.checkout_final=[];
          this.navCtrl.navigateForward('/vaultcart');
      }else{
        this.userDetails.UpdateCartData('cartItem',this.cart_items[0].id,this.checkout_final,this.final_cart_price);
        this.navCtrl.navigateForward('/vaultcart');

      }   
        }

        plusss(item){      // minus functionality
          this.final_cart_value=0;
          this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
          if(item.counter <= 0){}
          else{
            item.counter -= 1;
            this.addToCart.carts.push({
              counter : item.counter,
              itemId : item.itemId,
              highest_price:item.highest_price,
              name:item.name,
              total:String( parseFloat(item.counter) * parseFloat(item.current_price)),
              // total:String( parseFloat(item.counter) * parseFloat(item.total)),
              current_price: item.current_price,
              lowest_price : item.lowest_price,
              category_id:item.category_id,
              shop_id: item.shop_id,
              sub_category_id : item.sub_category_id,
              description:item.description,
              food_total:String( parseFloat(item.counter) * parseFloat(item.food_price)),
              food_price:item.food_price

            }); 
          }
          let calculatePrice = 0;
          
          this.addToCart.carts.forEach(function (value) {
            if(value.category_id==="1"){
            calculatePrice += value.counter * parseFloat(value.current_price);
            }else if(value.category_id!="1"){
              calculatePrice += value.counter * parseFloat(value.food_price);
            }
          });
          this.final_cart_value = calculatePrice; 
          console.log(">>>",this.addToCart.carts)
          }
        gotoCart(){
          localStorage.setItem("totalCartValue",this.final_cart_value);
          // Put the object into storage
          localStorage.setItem('cartItem', JSON.stringify(this.addToCart.carts));
          this.navCtrl.navigateForward('/cart');
        }
        public final_cart_value : any = 0;
        minusss(item){     // plus functionality
          console.log(item)
          this.final_cart_value=0;
          this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
          item.counter =parseInt(item.counter)  + 1;
          this.addToCart.carts.push({
                    counter : item.counter,
                    itemId : item.itemId,
                    highest_price:item.highest_price,
                    name:item.name,
                    total:String( parseFloat(item.counter) * parseFloat(item.current_price)),
                    // total:String( parseFloat(item.counter) * parseFloat(item.total)),
                    current_price: item.current_price,
                    lowest_price : item.lowest_price,
                    category_id:item.category_id,
                    shop_id: item.shop_id,
                    sub_category_id : item.sub_category_id,
                    description:item.description,
                    food_total:String( parseFloat(item.counter) * parseFloat(item.food_price)),
                    food_price:item.food_price
          });
          let calculatePrice = 0;
          // if(this.sections==="0"){
            this.addToCart.carts.forEach(function (value) {
              if(value.category_id==="1"){
              calculatePrice += value.counter * parseFloat(value.current_price);
              }else if(value.category_id!="1"){
                calculatePrice += value.counter * parseFloat(value.food_price);
              }
            });
          // }else{
          //   this.addToCart.carts.forEach(function (value) {
          //     calculatePrice += value.counter * parseFloat(value.food_price);
          //   });
          // }
          // this.addToCart.carts.forEach(function (value) {
          //   calculatePrice +=  parseFloat(value.food_total);
          // });
          this.final_cart_value = calculatePrice; 
          console.log(this.addToCart.carts);
          console.log(this.addToLiquorItem.liquorItem);
          console.log(this.sections)

        }

        public addToCart: {
          carts: CARTSITEM[];
        };
        getthisCounter(item){
          let value = this.addToCart.carts.find(({ itemId }) => itemId === item.id);
          if(value == undefined){
            return 0;
          }else{
            return value.counter;
          }
        }
        /*----------------------------add to Cart Work----------------------------------------------- */
        addToCarts(item){

          console.log(item);
          if(this.UniqueDeviceids===""){
            this.UniqueDeviceids="12345678";
          }
          if(this.sections=="0"){
            if(item.counter=="0"){
              this.helper.presentToast("Sorry you didnot select any item");
            }else{
            let data = {
              "device_id": localStorage.getItem('uniqueDeviceID'),
              "product_id": item.itemId,
              "product_name": item.name,
              "price":item.current_price,
              "quantity":item.counter,
              "is_liquor":"1"
              
            }
            this.userDetails.addToCart(data).then((res) => {
              if (res["status"] == '1') {
                this.helper.presentToast(res["message"]);
                console.log(res)
                
              }
            })
          }
          }
          else{
            if(item.counter=="0"){
              this.helper.presentToast("Sorry you didnot select any item");
            }else{
            let data = {
              "device_id": localStorage.getItem('uniqueDeviceID'),
              "product_id": item.itemId,
              "product_name": item.name,
              "price":item.food_price,
              "quantity":item.counter,
              "is_liquor":"0"
              
            }
            this.userDetails.addToCart(data).then((res) => {
              if (res["status"] == '1') {
                this.helper.presentToast(res["message"]);
                console.log(res)
                
              }
            })
          }
          }
      }


        /**************************Liquor Category and Liquor Item Work *******************/
        pushDataIntoLiquorCATEGORYClass(response){
          this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
          this.all_liquor=response.products;
          console.log(this.all_liquor);
          this.all_liquor.forEach((categoryResponse) => {
                if(this.all_liquor.length > 0){
                  let liquorItem = response;
                  // pusing the data in to FoodCategory Interface
                  this.addToLiquorItem.liquorItem.push({
                    counter : 0,
                    itemId : categoryResponse.id,
                    highest_price:categoryResponse.highest_price,
                    name:categoryResponse.name,
                    total:categoryResponse.total,
                    current_price: categoryResponse.current_price,
                    lowest_price : categoryResponse.lowest_price,
                    category_id:categoryResponse.category_id,
                    shop_id: categoryResponse.shop_id,
                    sub_category_id : categoryResponse.sub_category_id,
                    description:categoryResponse.description,
                    food_total:categoryResponse.food_total,
                    food_price:categoryResponse.price

                  });
                }
              }
            )
            console.log("addToLiquorItem",this.addToLiquorItem.liquorItem);
        }
        /**************************Food Category and Food Item Work *******************/
        // getFoodCategoryandFoodItem(){
        //   let shopId = localStorage.getItem('liquorshopid');
        //   this.userDetails.getFoodCategory(shopId).subscribe(
        //     res => {
        //       this.pushDataIntoFOODCATEGORYClass(res);
        //     },
        //     err => {console.log(err)},
        //   )
        // }

        pushDataIntoFOODCATEGORYClass(response){
          this.addToFoodItem.foodItem = []; // doing empty the Interface Class
          response.forEach((categoryResponse) => {
                  this.addToFoodItem.foodItem.push({
                    id : categoryResponse.id,
                    category_id : categoryResponse.category_id,
                    category_name : categoryResponse.name,
                    products : categoryResponse.products,
                  });
        });
        console.log(this.addToFoodItem.foodItem)
        }

        getFoodQuantity(foodItem){
          let value = this.addToFoodCart.foodCart.find(({ itemId }) => itemId === foodItem.id);
          if(value == undefined){
            return 0;
          }else{
            return value.counter;
          }
        }

        public addToFoodItem: {foodItem: FOODCATEGORY[];};
        public addToFoodCart: {foodCart: FOODITEMCART[];};
        public addToLiquorItem: {liquorItem: CARTSITEM[];};
        // public addToLiquorCart: {liquorCart: FOODITEMCART[];};
        public foodCartValue = 0;

        foodItemPlus(foodItem,category){
          let shopId = localStorage.getItem('liquorshopid');
          this.foodCartValue = 0;
          // finding the main Cart 
          let value = this.addToFoodCart.foodCart.find(({ itemId }) => itemId === foodItem.itemId);
          if(value == undefined){
            this.addToFoodCart.foodCart.push({
                    counter : foodItem.counter,
                    itemId : foodItem.itemId,
                    highest_price:foodItem.highest_price,
                    name:foodItem.name,
                    total:String( parseFloat(foodItem.counter) * parseFloat(foodItem.current_price)),
                    price: foodItem.price,
                    lowest_price : foodItem.lowest_price,
                    category_id:foodItem.category_id,
                    shop_id: foodItem.shop_id,
                    sub_category_id : foodItem.sub_category_id,
            });
          }
          else{
            value.counter = (parseInt(String(value.counter)) - 1).toString();
            if(String(value.counter) == '0'){
              // removing the FoodCart
              this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(({ itemId }) => itemId !== foodItem.itemId);
            }
          }
          let calculatePrice = 0;
          this.addToFoodCart.foodCart.forEach(function (value) {
            calculatePrice += parseInt(String(value.counter)) * parseFloat(String(value.price));
          });
          this.foodCartValue = calculatePrice;
          console.log(this.addToFoodCart.foodCart);
        }
        
        foodItemMinus(foodItem,category){
          let shopId = localStorage.getItem('liquorshopid');
          this.foodCartValue=0;
          // finding the main Cart 
          console.log(this.addToFoodCart.foodCart);
          console.log(foodItem);

          let value = this.addToFoodCart.foodCart.find(({ itemId }) => itemId === foodItem.id);
          if(value == undefined){
            this.addToFoodCart.foodCart.push({
                    counter : '1',
                    itemId : foodItem.id,
                    highest_price:foodItem.highest_price,
                    name:foodItem.name,
                    total:String( parseFloat(foodItem.counter) * parseFloat(foodItem.current_price)),
                    price: foodItem.price,
                    lowest_price : foodItem.lowest_price,
                    category_id:foodItem.category_id,
                    shop_id: foodItem.shop_id,
                    sub_category_id : foodItem.sub_category_id,
            });
          }
          else{
            value.counter = (parseInt(value.counter) + 1).toString();
          }
          // this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(({ foodItemId }) => foodItemId !== foodItem.id); // removing the Duplicasy or 0 selected from Local variable
          let calculatePrice = 0;
          this.addToFoodCart.foodCart.forEach(function (value) {
            calculatePrice += parseInt(value.counter) * parseFloat(value.price);
          });
          this.foodCartValue = calculatePrice;
          console.log(this.addToFoodCart.foodCart);
        }


        gotoFoodCart(){
          if(this.addToFoodCart.foodCart.length > 0){
            // total Item in cart
            // console.log('Total Item in Cart',this.addToFoodCart.foodCart);
            localStorage.setItem('foodItemCart',JSON.stringify(this.addToFoodCart.foodCart));
            this._router.navigate(['/food/cart']);
          }else{
            this.helper.showErrorCustom('Please select any Item');
          }
        }
        /**************************Food Category and Food Item Work END*******************/


}
interface FOODITEMCART{
  counter : string,
  itemId : string,
  highest_price:string,
  name:string,
  total:string,
  price: string;
  lowest_price : string;
  category_id:string,
  shop_id: string;
  sub_category_id : string;
}

interface FOODCATEGORY{
  id : number,
  category_id : string,
  category_name : string,
  products : any,

}

interface CARTSITEM {
  counter : number,
  itemId : string,
  highest_price:string,
  name:string,
  total:string,
  current_price: string;
  lowest_price : string;
  category_id:string,
  shop_id: string;
  sub_category_id : string;
  description : string;
  food_total:string;
  food_price:string;


}