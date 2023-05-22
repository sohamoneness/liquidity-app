import { Component, OnInit } from '@angular/core';
import { HelperProvider } from '../services/helper.service';
import { VaultProvider } from '../services/vault.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-vault-order-history',
  templateUrl: './vault-order-history.page.html',
  styleUrls: ['./vault-order-history.page.scss'],
})
export class VaultOrderHistoryPage implements OnInit {

  public userId: any = 0;
  public orderDetails: any = [];

  constructor(
    private vaultProvider: VaultProvider,
    private helper: HelperProvider,
    private _router: Router,
    private navCtrl: NavController,

  ) {
    this.userId = localStorage.getItem('user_id');
  }

  ngOnInit() {
    // this.getOrderDetails(this.userId);
    console.log(localStorage.getItem("user_id"));
    this.vaultProvider.getVaultOrderList(localStorage.getItem("user_id")).then((res) => {
      if (res["status"] == 1) {
        this.orderDetails = res["products"];
        console.log(res);
      }
    })
  }


  orderDetailss(item) {
    console.log(item)
    localStorage.setItem('VaultOrderDetails', JSON.stringify(item));
    localStorage.setItem("order_id", item.id);
    this.navCtrl.navigateForward('/vault-order-details');

  }
  cancelVaultOrder(item) {
    console.log(item);
    // let data = {
    //   "id": item.id,
    // }
    // this._userDetails.cancelVaultOrder(data).then((res) => {
    //   if (res["status"] == '1') {
    //     this.helper.presentToast('Item cancelled successfully');
    //     console.log(res);
    //   }
    // })
  }
}

