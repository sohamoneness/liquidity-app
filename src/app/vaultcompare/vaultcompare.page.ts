import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HelperProvider } from '../services/helper.service';
import { VaultProvider } from '../services/vault.service';
import { NavController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vaultcompare',
  templateUrl: './vaultcompare.page.html',
  styleUrls: ['./vaultcompare.page.scss'],
})
export class VaultcomparePage implements OnInit {

  public cartPrice: any = 0;
  cart_items: any = [];
  cart_item: any = [];
  date: any = [];
  time: any = [];
  amm1: any = [];
  transaction_id: any = [];
  today_date: any = [];
  user: any = [];
  user_name: any = [];
  mail: any = [];
  mobile: any = [];
  public outletDetails: any = [];
  selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  wallet_balance: any = [];
  wallet_status = 0;
  vault_order_id = '';
  constructor(
    private vaultProvider: VaultProvider,
    private helper: HelperProvider,
    private _authService: AuthenticationService,
    private _router: Router,
    private navCtrl: NavController,
    private datePipe: DatePipe,
    public platform: Platform,
  ) {
  }

  ngOnInit() {
    this.getCartData(); // getting the Selected Cart
    let data = {
      "device_id": localStorage.getItem('uniqueDeviceID'),
    }
    this.vaultProvider.getVaultCartDetails(data).then((res) => {
      if (res["status"] == '1') {
        console.log(res);
        this.cart_items = res["cartItems"];
        this.cartPrice = res["total_price"];
        this.cart_item = this.cart_items.length;

        this.wallet_balance = localStorage.getItem('wallet_balance');
        if (Number(this.cartPrice > Number(this.wallet_balance))) {
          this.wallet_status = 1;
        } else if (Number(this.cartPrice < Number(this.wallet_balance))) {
          this.wallet_status = 2;
        }
        console.log('wallet_balance', this.wallet_balance);
        console.log('cartPrice', this.cartPrice);
      }
    })
    this.vaultProvider.fetchVaultShops(localStorage.getItem('outletCategory')).then((res) => {
      if (res["status"] == 1) {
        this.outletDetails = res["vault_shops"];
        console.log(this.outletDetails);
      }
    })
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.user);
    this.mail = this.user.email;
    this.user_name = this.user.name;
    this.mobile = this.user.mobile;
  }

  getCartData() {
    this.cartPrice = localStorage.getItem('cartsPrice');
  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
  }

  pay() {
    if (this.cart_items.length > 0) {
      if (this.selectedRadioGroup == undefined) {
        this.helper.showErrorCustom("Please choose payment mode")
      } else if (this.selectedRadioGroup == 'wallet') {
        this.transaction();
      }
      else if (this.selectedRadioGroup == 'online') {
        this.payment();
      }

    } else {
      this.helper.showErrorCustom('Please select any Order');
    }
  }


  transaction() {
    const data2 = {
      "customer_name": this.user_name,
      "customer_email": this.mail,
      "customer_mobile": this.mobile,
      "user_id": localStorage.getItem("user_id"),
      "transaction_id": '123456',
      "device_id": localStorage.getItem('uniqueDeviceID'),
      "payment_type": '2'
    };
    this.vaultProvider.createVaultOrder(data2).then((res) => {
      if (res["status"] == '1') {
        this.helper.suucessAlert(res["message"]);
        this.vault_order_id = res["order_id"];
        localStorage.setItem("vault_orderrr_id", this.vault_order_id)
        console.log(this.transaction_id)
        this.navCtrl.navigateForward('/vault-order-success');
      } else {
        this.helper.presentAlert(res["message"]);
      }
    }, (error) => {
      this.helper.presentAlert("Invalid Data");
    })
  }


  payment() {
    this.amm1 = (Number(this.cartPrice) * 100).toFixed(0);
    console.log('check>>', this.amm1)
    var options = {
      description: 'Liquidity',
      image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Liquidity_Logo.png?alt=media&token=9b6b5894-0176-4755-aeba-66d1aa7722b6",
      currency: 'C$',
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
      this.helper.showErrorCustom(payment_id);
      this.transaction_id = payment_id;
      const data4 = {
        "customer_name": this.user_name,
        "customer_email": this.mail,
        "customer_mobile": this.mobile,
        "user_id": localStorage.getItem("user_id"),
        "transaction_id": payment_id,
        "device_id": localStorage.getItem('uniqueDeviceID'),
        "payment_type": '1'
      };
      this.vaultProvider.createVaultOrder(data4).then((res) => {
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);
          this.vault_order_id = res["order_id"];
          localStorage.setItem("vault_orderrr_id", this.vault_order_id)
          localStorage.setItem("vault", '1');
          //this.helper.showErrorCustom(this.transaction_id);
          console.log(this.transaction_id)
          this.navCtrl.navigateForward('/vault-order-success');
        } else {
          this.helper.presentAlert(res["message"]);
        }
      }, (error) => {
        this.helper.presentAlert("Invalid Data");
      })
    }

    var cancelCallback = (error) => {
      alert(error.description + ' (Error ' + error.code + ')');
    };


    this.platform.ready().then(() => {
      RazorpayCheckout.open(options, successCallback, cancelCallback);
    })
  }


  removeItem(index, item) {
    this.cart_items.splice(index, 1);
    this.cartPrice = Number(this.cartPrice) - (Number(item.quantity) * Number(item.price));
    this.vaultProvider.deleteFromVaultCart(item.id).then((res) => {
      if (res["status"] == 1) {
        let data = {
          "device_id": localStorage.getItem('uniqueDeviceID'),
        }
        this.vaultProvider.getVaultCartDetails(data).then((res) => {
          if (res["status"] == '1') {
            console.log(res);
            this.cart_items = res["cartItems"];
            this.cartPrice = res["total_price"];
          }
        })
      }
    })
  }
}

