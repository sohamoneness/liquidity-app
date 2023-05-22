import { HelperProvider } from 'src/app/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-vault-order-details',
  templateUrl: './vault-order-details.page.html',
  styleUrls: ['./vault-order-details.page.scss'],
})
export class VaultOrderDetailsPage implements OnInit {
  all_liquor_order_summary: any = [];
  all_order: any = [];
  shop_details: any = [];
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,

  ) { }
  ngOnInit() {
    var retrievedObject = JSON.parse(localStorage.getItem('VaultOrderDetails'));
    console.log('retrievedObject: ', retrievedObject);
    this.all_order = retrievedObject;
    console.log(this.all_order);
    this.all_liquor_order_summary = retrievedObject["redeems"];
  }
}
