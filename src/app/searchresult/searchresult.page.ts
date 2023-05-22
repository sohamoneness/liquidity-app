import { Component, OnInit } from '@angular/core';
import { HelperProvider } from 'src/app/services/helper.service';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonProvider } from 'src/app/services/common.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.page.html',
  styleUrls: ['./searchresult.page.scss'],
})
export class SearchresultPage implements OnInit {

  product_name = '';
  products = [];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router: Router,
    private commonProvider: CommonProvider
  ) { }

  ngOnInit() {
    this.product_name = localStorage.getItem("product_name");
    let data = {
      "product_name" : this.product_name
    }
    this.commonProvider.compareProduct(data).then((res) => {
      if (res["status"] == 1) {
        this.products = res["products"];
      }
    })
  }

  gotoshopproduct(liquorshopid, item) {
    localStorage.setItem("liquorshopid", liquorshopid);
    localStorage.setItem('shopDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/outletmenu');
  }


}
