import { Component, OnInit } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-food-item-cart',
  templateUrl: './food-item-cart.page.html',
  styleUrls: ['./food-item-cart.page.scss'],
})
export class FoodItemCartPage implements OnInit {
user :any =[];
  user_name :any =[];
  mail :any =[];
  mobile :any =[];
  amm1 :any =[];
  transaction_id :any =[];
  shopDetails :any =[];
    id=0;

  constructor(
    private helper : HelperProvider,
    private navCtrl: NavController,
    private userDetails:UserDetailsService,
    public platform: Platform,
  ){
    this.addToFoodCart = {foodCart : []}; // add To Food Cart
  }

  public addToFoodCart: {foodCart: FOODITEMCART[];};
  public totalPrice = 0;
  ngOnInit() {
    this.addToFoodCart.foodCart = JSON.parse(localStorage.getItem('foodItemCart'));
    let price = 0;
    this.addToFoodCart.foodCart.forEach((value) => {
      price += parseFloat(value.price) * parseFloat(value.quantity);
    });
    this.totalPrice = price;
    // console.log(this.addToFoodCart.foodCart);


this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
      console.log('shopDetails: ', this.shopDetails);
      var date = new Date();
      // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
      // this.today_date=String(this.datePipe.transform(date,"dd-MM-yyyy"));
    this.user = JSON.parse(localStorage.getItem('user_Detais'));
      console.log(this.user);
      this.mail=this.user.email;
      this.user_name=this.user.name;
      this.mobile=this.user.mobile;
      this.bookingData.mobile=this.mobile;
      this.bookingData.email=this.mail;
  }

  removeItem(foodCart){
      this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(({ foodItemId }) => foodItemId !== foodCart.foodItemId); // removing the Duplicasy or 0 selected from Local variable
      let price = 0;
      this.addToFoodCart.foodCart.forEach((value) => {
          price += parseFloat(value.price) * parseFloat(value.quantity);
      });
      this.totalPrice = price;
  }

  public bookingData = {
      mobile : '', email : '', date : '', time:'',bookingfor:'myself',
  }

  payforFood(){
    if(this.addToFoodCart.foodCart.length <= 0){
      this.helper.showErrorCustom('Please select at least one Unit');
    }else if(this.bookingData.mobile == '' || this.bookingData.email == '' || this.bookingData.date == '' || this.bookingData.time == ''){
      this.helper.showErrorCustom('Please fill your details');
    }else{
      // this.saveDataTotheTable();
      // this.navCtrl.navigateForward('/order-success');
      this.payment();
    }
  }

  saveDataTotheTable(){
      let UserId = localStorage.getItem('user_id');
      // console.log('Items in Cart',this.addToFoodCart.foodCart);
      // console.log('UsrId',UserId);
      // console.log('Booking Data',this.bookingData);
      
      this.addToFoodCart.foodCart.forEach((value) => {
          this.userDetails.addFoodOrderDetails(value,this.bookingData,UserId);
      });
  }
    payment() {
    
    //this.amm = Number(this.wallet_amount)*100;
    this.amm1 =  (Number(this.totalPrice)*100).toFixed(0);
     console.log('check>>',this.amm1)
    var options = {
      description: 'Liquidity',
      image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Home%20page%20icon_02.png?alt=media&token=d6da71bd-66aa-48fa-bd55-446e23170fef",
      currency: 'C$',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: this.amm1,
      name: "Liquidity",
      prefill: {
        email: '',
        contact: '',
        name: 'a'
      },
      theme: {
        color: '#DD0023'
      },
      modal: {
        ondismiss: function() {
          alert('dismissed')
        }
      }
    };

    var successCallback = (payment_id) => {
        this.saveDataTotheTable();
      this.navCtrl.navigateForward('/order-success');
              // callApi(payment_id);

    };

    var cancelCallback =(error) =>{
      alert(error.description + ' (Error ' + error.code + ')');
    };
var callApi = (payment_id) => {
          this.id=new Date().getTime();
        const data2 = {
            "customer_name": this.user_name,  
            "customer_email": this.mail,
            "customer_mobile": this.mobile,
            "store_name":this.shopDetails.liquorShopName,
            "store_email":this.shopDetails.liquorShopOwnerEmail,
            "order_id":"liq"+this.id,
            "order_amount":this.totalPrice,
            "order_date":this.bookingData.date,
          };
    this.userDetails.pay_email(data2).then((res) => {
      if (res["status"] == '1') {
        this.helper.presentToast(res["message"]);
        console.log(this.transaction_id)
        // this.navCtrl.push(TabsPage);
      } else {
        this.helper.presentToast(res["message"]);
      }
    },(error)=>{
      this.helper.presentToast("Invalid Data");
    })
}
    this.platform.ready().then(() => {
      RazorpayCheckout.open(options, successCallback, cancelCallback);
    })
}
}



interface FOODITEMCART{
  categoryId : string,
  foodItemId : string,
  price : string,
  quantity : string,
  categoryName : string,
  itemName : string,
  itemType : string,
  shopId : string,
}
