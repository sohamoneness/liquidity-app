import { OrderProvider } from 'src/app/services/order.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-liquororderhistroy-details',
  templateUrl: './liquororderhistroy-details.page.html',
  styleUrls: ['./liquororderhistroy-details.page.scss'],
})
export class LiquororderhistroyDetailsPage implements OnInit {
  all_liquor_order_summary: any = [];
  all_order: any = [];
  shop_details: any = [];
  payment_type: any = [];

  constructor(
    private navCtrl: NavController,
    private orderProvider: OrderProvider,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,

  ) { }

  ngOnInit() {
    this.orderProvider.fetchOrderDetails(localStorage.getItem("order_id")).then((res) => {
      if (res["status"] == 1) {
        console.log('res', res)
        this.all_order = res["order"];
        console.log(this.all_order);
        this.all_liquor_order_summary = res["order"]["products"];
        this.shop_details = res["order"]["shop"];
        this.payment_type = res["order"]['payment_type'];
        console.log(this.payment_type)

      }
    })
  }
}
