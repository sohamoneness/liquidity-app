import { OrderProvider } from 'src/app/services/order.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-liquororderhistroy',
  templateUrl: './liquororderhistroy.page.html',
  styleUrls: ['./liquororderhistroy.page.scss'],
})
export class LiquororderhistroyPage implements OnInit {
  all_liquor: any = [];
  liquorshopid = '';
  orders: any = [];
  constructor(
    private navCtrl: NavController,
    private orderProvider: OrderProvider,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,

  ) { }

  ngOnInit() {
    console.log(localStorage.getItem("user_id"));
    this.orderProvider.fetchOrderHistroy(localStorage.getItem("user_id")).then((res) => {
      if (res["status"] == 1) {
        this.orders = res["orders"];
      }
    })
  }

  orderDetails(item) {
    localStorage.setItem("order_id", item.id);
    this.navCtrl.navigateForward('/liquororderhistroy-details');

  }

  cancelOrder(item) {
    console.log(item);
    // let data = {
    //   "id": item.id,
    // }
    // this.userDetails.cancelOrder(data).then((res) => {
    //   if (res["status"] == '1') {
    //     this.helper.presentToast('Item cancelled successfully');
    //     console.log(res);
    //   }
    // })
  }

}
