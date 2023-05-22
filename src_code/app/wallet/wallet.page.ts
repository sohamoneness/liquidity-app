import { AccountProvider } from 'src/app/services/account.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, AlertController, ModalController, MenuController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  walletList = [];
  wallet_balance = '0';
  loginForm: FormGroup;
  amm = '';
  amm1 = 0;
  wallet_amount = '';
  user: any = [];
  user_name: any = [];
  user_mail: any = [];
  user_mobile: any = [];
  
  constructor(
    private accountProvider: AccountProvider,
    private helper: HelperProvider,
    private _router: Router,
    public navCtrl: NavController,
    private fb: FormBuilder,
    public platform: Platform,
    private alert: AlertController,

  ) {
    this.loginForm = fb.group({
      'amount': ['', Validators.compose([Validators.required])],
    });
  }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    this.user_mail = this.user.email;
    this.user_name = this.user.name;
    this.user_mobile = this.user.mobile;
    if (localStorage.getItem("userDetails")) {
      const id = JSON.parse(localStorage.getItem("userDetails")).id;
      this.accountProvider.fetchWalletTransactions(id).then((res) => {
        if (res["status"] == "1") {
          this.walletList = res["wallets"];
          this.wallet_balance = res["wallet_balance"];
        } else {
          this.helper.presentAlert(res["message"])
        }
      }).catch((err) => {
        console.log("Some error occurred");
      })
    }
    console.log('ionViewDidLoad WalletPage');
  }

  pay() {

    //this.amm = Number(this.wallet_amount)*100;
    this.amm1 = Number(this.wallet_amount) * 100;

    var options = {
      description: 'Liquidity App',
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

    var successCallback = function (payment_id) {
      addToWallet(payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    var addToWallet = (payment_id) => {
      let data = this.loginForm.value;
      data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;

      this.accountProvider.addWalletBalance(data).then((res) => {
        if (res["status"] == "1") {
          this.helper.presentAlert('Amount successfully added to your wallet.')
          if (localStorage.getItem("userDetails")) {
            const id = JSON.parse(localStorage.getItem("userDetails")).id;
            this.accountProvider.fetchWalletTransactions(id).then((res) => {
              console.log("rohan", res)
              if (res["status"] == "1") {
                this.walletList = res["wallets"];
                this.wallet_balance = res["wallet_balance"];
                localStorage.setItem("wallet_balance", this.wallet_balance);
                const id = JSON.parse(localStorage.getItem("userDetails")).id;
                this.accountProvider.fetchWalletTransactions(id).then((res) => {
                  // console.log("rohan", res)
                  if (res["status"] == "1") {
                    this.walletList = res["wallets"];
                    this.wallet_balance = res["wallet_balance"];
                    this.wallet_amount = '';
                    this.helper.suucessAlert(res["message"])
                    this.navCtrl.navigateRoot('/homenew');
                  } else {
                    this.helper.presentAlert(res["message"])
                  }
                }).catch((err) => {
                })
              } else {
                this.helper.presentAlert(res["message"])
              }
            }).catch((err) => {
              
            })
          }
        } else {
          this.helper.presentAlert(res["message"])

        }
      }).catch((err) => {
        
      })
    }

    //RazorpayCheckout.open(options, successCallback, cancelCallback);
    this.platform.ready().then(() => {
      RazorpayCheckout.open(options, successCallback, cancelCallback);
    })
  }
}
