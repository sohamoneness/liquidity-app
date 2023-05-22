import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperProvider } from '../services/helper.service';
import { VaultProvider } from '../services/vault.service';
import { DatePipe } from '@angular/common';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-vault-redeem',
  templateUrl: './vault-redeem.page.html',
  styleUrls: ['./vault-redeem.page.scss'],
})
export class VaultRedeemPage implements OnInit {

  public OrderId: any = '';
  public userId: any = '';
  public shop_id: any = '';
  public itemCount: any = 0;
  public orderDetails: any = {};
  public redeemDetails: any = {};
  public Outlets: any = [];
  mail: any = [];
  mobile: any = [];
  date: any = [];
  time: any = '';
  today_date: any = '';
  scheduled_date : any = '';
  user: any = [];
  user_name: any = [];
  slideOpts = {
    slidesPerView: 2.3,
  };
  highest_item = 0;

  constructor(
    private vaultProvider: VaultProvider,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private helper: HelperProvider,
    private datePipe: DatePipe,
    private navCtrl: NavController,

  ) { }


  ngOnInit() {
    this.OrderId = this._activatedRoute.snapshot.paramMap.get('vaultOrderId');
    this.orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    if(Number(this.orderDetails.balance_quantity)>10){
      this.highest_item = 10;
    }else{
      this.highest_item = Number(this.orderDetails.balance_quantity);
      if(this.highest_item<5){
        this.helper.presentAlert("You have only "+this.highest_item+" unit stored in your vault. Recharge your vault again and enjoy your drink");
      }
    }

    console.log(this.orderDetails)
    var date = new Date();
    this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
    var hours = date.getHours();
    var minutes = date.getMinutes();
    this.time = hours + ':' + minutes;
    console.log(hours + ':' + minutes);
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.user);
    this.mail = this.user.email;
    this.user_name = this.user.name;
    this.mobile = this.user.mobile;

    this.date = this.today_date;
    var someDate = new Date();
    var numberOfDaysToAdd = 29;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();

    var someFormattedDate = y + '-' + mm + '-' + dd;
    this.scheduled_date = String(this.datePipe.transform(someFormattedDate, "yyyy-MM-dd"));
  }

  plusss() {
    console.log("minus")
    if (this.itemCount <= 0) { this.itemCount = 0; }
    else {
      this.itemCount -= 1;
    }
    this.updateCartPrice();
  }

  minusss() {
    if (this.itemCount >= this.highest_item) { }

    else {
      this.itemCount += 1;
    }
    this.updateCartPrice();
  }

  public cartPrice = 0;
  updateCartPrice() {
    this.cartPrice = 0;
    this.cartPrice = this.itemCount * this.orderDetails.price;
  }

  public bookingData = {
    mobile: '', email: '', date: '', time: '', selectedOutlet: [], bookingfor: 'myself',
  }

  /**
   * This method is to select the outlet
   * @param event
   * @param outletDetails 
   */
  selectedOutlet(event, outletDetails) {
    if (event.target.checked) {
      this.bookingData.selectedOutlet.push(outletDetails.id);
      console.log(outletDetails);
      this.shop_id = outletDetails.id;
    } else {
      const index: number = this.bookingData.selectedOutlet.indexOf(outletDetails.id);
      this.bookingData.selectedOutlet.splice(index, 1);
    }
  }

  /**
   * This method is for connecting vault booking api
   */
  confirmBooking() {

    if (Number(this.itemCount <= 0)) {
      this.helper.presentAlert('Please select the quantity to continue')
    } else if (this.shop_id == '') {
      this.helper.presentAlert('Please select an outlet to continue')
    } else if (this.today_date == '') {
      this.helper.presentAlert('Please select a redeem date to continue')
    } else if (this.time == '') {
      this.helper.presentAlert('Please select a redeem time to continue')
    } else {
      const data2 = {
        "order_id": this.orderDetails.id,
        "quantiy": this.itemCount,
        "shop_id": this.shop_id,
        "user_id": localStorage.getItem("user_id"),
        "redeem_date": this.date,
        "redeem_time": this.time,

      };
      this.vaultProvider.redeemItemFromVault(data2).then((res) => {
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);
          console.log(res);
          // localStorage.setItem("order_id",res["order_id"])
          this.navCtrl.navigateForward('/vaulthome');
        } else {
          this.helper.presentAlert(res["message"]);
        }
      }, (error) => {
        console.log("Some error occurred");
      })
    }
  }

}
