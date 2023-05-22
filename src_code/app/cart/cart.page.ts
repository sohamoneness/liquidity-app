import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart_items: any = [];
  final_cart_items: any = [];
  final_cart_price: any = [];
  shopDetails: any = [];
  today_date: any = [];
  user: any = [];
  user_name: any = [];
  mail: any = [];
  mobile: any = [];
  date: any
  time: any = [];
  amm1: any = [];
  transaction_id: any = [];
  selectedRadioGroup: any;
  selectedRadioGroupForSomeoneElse: any;

  //Get value on ionSelect on IonRadio item
  id = 0;
  wallet_balance = '';
  wallet_status = 0;
  scheduled_date = '';
  minTime = '10:00';
  maxTime = '10:00';
  final_order_id = '';

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private helper: HelperProvider,
    private datePipe: DatePipe,
    public platform: Platform,
  ) {
  }

  ngOnInit() {


    let data = {
      "device_id": localStorage.getItem('uniqueDeviceID'),
    }
    this.userDetails.getCartDetails(data).then((res) => {
      if (res["status"] == '1') {

        // this.helper.presentToast(res["message"]);
        console.log(res);
        this.cart_items = res["cartItems"];
        this.final_cart_price = res["total_price"];
        this.wallet_balance = localStorage.getItem('wallet_balance');
        if (Number(this.final_cart_price > Number(this.wallet_balance))) {
          this.wallet_status = 1;
        } else if (Number(this.final_cart_price < Number(this.wallet_balance))) {
          this.wallet_status = 2;
        }
        console.log('wallet_balance', this.wallet_balance);
        console.log('final_cart_price', this.final_cart_price);
      }
    })
    // Retrieve the object from storage
    this.cart_items = JSON.parse(localStorage.getItem('cartItem'));
    console.log('retrievedObject: ', this.cart_items);
    this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
    console.log('shopDetails: ', this.shopDetails);
    this.final_cart_price = localStorage.getItem('totalCartValue');
    var date = new Date();
    // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
    this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
    this.date = this.today_date;
    console.log(this.date)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    this.time = hours + ':' + minutes;
    console.log(hours + ':' + minutes);
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.user);
    this.mail = this.user.email;
    this.user_name = this.user.name;
    this.mobile = this.user.mobile;

    // Adding extra 3 days from today date

    var someDate = new Date();
    var numberOfDaysToAdd = 2;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();

    var someFormattedDate = y + '-' + mm + '-' + dd;
    this.scheduled_date = String(this.datePipe.transform(someFormattedDate, "yyyy-MM-dd"));
    console.log(this.scheduled_date);

  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
  }
  radioGroupMyself(event) {
    console.log("selectedRadioGroupForSomeoneElse", event.detail.value);
    this.selectedRadioGroupForSomeoneElse = event.detail.value;
    localStorage.setItem("selectedRadioData", this.selectedRadioGroupForSomeoneElse)
    if (this.selectedRadioGroupForSomeoneElse == 'someoneelse') {
      this.mobile = '';
      this.mail = '';


    } else {
      this.mail = this.user.email;
      this.user_name = this.user.name;
      this.mobile = this.user.mobile;

    }
  }
  removeItem(index, item) {
    this.cart_items.splice(index, 1);
    this.final_cart_price = Number(this.final_cart_price) - (Number(item.quantity) * Number(item.price));
    this.userDetails.deleteFromCart(item.id).then((res) => {
      if (res["status"] == 1) {
        let data = {
          "device_id": localStorage.getItem('uniqueDeviceID'),
        }
        // this.userDetails.getCartDetails(data).then((res) => {
        //   if (res["status"] == '1') {
        //     // this.helper.presentToast(res["message"]);
        //     console.log(res);
        //     this.cart_items=res["cartItems"];
        //     this.final_cart_price=res["total_price"];

        //   }
        // })
        this.ngOnInit();

      }
    })
  }

  pay() {
    console.log(this.selectedRadioGroup)
    this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
    if (this.cart_items.length > 0) {
      if (this.selectedRadioGroup == undefined) {
        this.helper.showErrorCustom("Please choose payment mode")
      } else if (this.selectedRadioGroup == 'wallet') {
        this.id = new Date().getTime();
        // this.today_date=String(this.datePipe.transform(this.date,"yyyy-MM-dd"));
        // this.date=this.today_date;
        const data2 = {
          "customer_name": this.user_name,
          "customer_email": this.mail,
          "customer_mobile": this.mobile,
          "user_id": localStorage.getItem("user_id"),
          "transaction_id": '',
          "device_id": localStorage.getItem('uniqueDeviceID'),
          "order_time": this.time,
          "order_date": this.today_date,
          "shop_id": this.shopDetails.id,
          "payment_type": '2'
        };
        this.userDetails.createOrder(data2).then((res) => {
          if (res["status"] == '1') {
            this.helper.presentToast(res["message"]);
            this.final_order_id = res["order_id"];
            localStorage.setItem("orderrr_id", this.final_order_id);
            this.helper.showErrorCustom('cartPage');
            this.helper.showErrorCustom(this.final_order_id);
            console.log(this.transaction_id)
            // this.Order_Details();
            this.navCtrl.navigateForward('/order-success');
          } else {
            this.helper.presentToast(res["message"]);
          }
        }, (error) => {
          this.helper.presentToast("Invalid Data");
        })
      }
      else if (this.selectedRadioGroup == 'online') {
        this.payment();
      }

    } else {
      this.helper.showErrorCustom('Please select any Order');
    }
  }

  public priceIncreaseByPercentage: any = (2 / 100);
  public priceDecreaseByPercentage: any = (0.5 / 100);
  priceIncreaseOrDecrease() {
    let PriceIncreasingByID = []; // Containing The Id which has Price Higher so that we can skip the Id with the Price Lower
    this.cart_items.forEach((value) => {
      // price Increasing the same Order after the Order Success
      let nowPrice = parseFloat(value.BigLiquorActualPrice) + (parseFloat(value.BigLiquorActualPrice) * parseFloat(this.priceIncreaseByPercentage));
      this.updatePriceValueOfLiquor(value.itemId, nowPrice);
      // Price Decreasing Other Order after Order Success
      PriceIncreasingByID.push(value.itemId);// pusing the Id Which will be Skipped
    });
    this.DeceasePriceValueforTheOrderExceptThisIds(PriceIncreasingByID);
  }

  updatePriceValueOfLiquor(value, updatePrice) {
    this.userDetails.updateLiquorPriceAfterPurchase(value, updatePrice);
  }

  public newData: any = [];
  DeceasePriceValueforTheOrderExceptThisIds(ExceptIds) {
    // getting the Whole Liquor Data
    this.userDetails.getLiquorDataExceptTheseIds(ExceptIds).subscribe(
      res => {
        this.newData = res;
        this.filterDataAndUpdate(ExceptIds, this.newData);
      },
      err => { console.log(err) },
    )
  }

  filterDataAndUpdate(ExceptedID, newData) {
    // filtering the Ids
    newData.forEach((value) => {
      if (ExceptedID.find(x => x == value.id) == undefined) {
        let nowPrice: any = parseFloat(value.BigLiquorActualPrice) - (parseFloat(value.BigLiquorActualPrice) * parseFloat(this.priceDecreaseByPercentage));
        if (parseFloat(nowPrice) < parseFloat(value.BigLiquorMinPrice)) {
          nowPrice = parseFloat(value.BigLiquorActualPrice);
        }
        this.updatePriceValueOfLiquor(value.id, parseFloat(nowPrice));
        // console.log('Id =>'+value.id+'=>Actulal Price : =>'+parseFloat(value.BigLiquorActualPrice)+' => NowPrice: ',nowPrice+'=>Min price:=>'+value.BigLiquorMinPrice);
      }
    });
  }


  payment() {
    var date = new Date();
    var today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
    this.amm1 = (Number(this.final_cart_price) * 100).toFixed(0);
    console.log('check>>', this.amm1)
    var options = {
      description: 'Liquidity',
      image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Liquidity_Logo.png?alt=media&token=9b6b5894-0176-4755-aeba-66d1aa7722b6",
      currency: 'CAD',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: this.amm1,
      name: "Liquidity",
      prefill: {
        email: JSON.parse(localStorage.getItem("userDetails")).email,
        contact: JSON.parse(localStorage.getItem("userDetails")).mobile,
        name: JSON.parse(localStorage.getItem("userDetails")).name
      },
      theme: {
        color: '#DCC88D'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = (payment_id) => {
      this.transaction_id = payment_id;
      this.today_date = String(this.datePipe.transform(this.date, "dd-MM-yyyy"));
      console.log(this.today_date);
      callApi(payment_id);
    };

    var cancelCallback = (error) => {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    var callApi = (payment_id) => {
      this.id = new Date().getTime();
      this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
      this.date = this.today_date;
      const data3 = {
        "customer_name": this.user_name,
        "customer_email": this.mail,
        "customer_mobile": this.mobile,
        "user_id": localStorage.getItem("user_id"),
        "transaction_id": payment_id,
        "device_id": localStorage.getItem('uniqueDeviceID'),
        // "order_time":this.time,
        // "order_date":this.date,
        "order_time": this.time,
        "order_date": this.today_date,
        "shop_id": this.shopDetails.id,
        "payment_type": '1'
      };
      this.userDetails.createOrder(data3).then((ress) => {
        if (ress["status"] == '1') {
          this.helper.presentToast(ress["message"]);
          console.log(this.transaction_id)
          this.final_order_id = ress["order_id"];
          localStorage.setItem("orderrr_id", this.final_order_id);
          this.helper.showErrorCustom(this.final_order_id);
          this.navCtrl.navigateForward('/order-success');
          // this.Order_Details();

        } else {
          this.helper.presentToast(ress["message"]);
        }
      }, (error) => {
        this.helper.presentToast("Invalid Data");
      })
    }
    this.platform.ready().then(() => {
      RazorpayCheckout.open(options, successCallback, cancelCallback);
    })
  }

  // Order_Details(){
  //   this.userDetails.fetchOrderHistroydetails(this.final_order_id).then((res) => {
  //           if (res["status"]==1) {
  //             // this.OrderDetails = res["order"];
  //             // this.payment_type=res["order"]['payment_type'];
  //           localStorage.setItem("orderDetails", JSON.stringify(res['order']));
  //           this.navCtrl.navigateForward('/order-success');
  //             console.log(res);
  //           }
  //         })
  // }

}
