import { AccountProvider } from 'src/app/services/account.service';
import { CommonProvider } from 'src/app/services/common.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform, ModalController, MenuController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Router } from '@angular/router';

import { FilterDistanceComponent } from '../filter-distance/filter-distance.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  shops: any = [];
  cities: any = [];
  banners: any = [];
  UniqueDeviceID: any;

  slideOpts1 = {
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
  }

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private accountProvider: AccountProvider,
    private commonProvider: CommonProvider,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private uniqueDeviceID: UniqueDeviceID,
    private modalController: ModalController,
    private menu: MenuController,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getUniqueDeviceID();
    const id = JSON.parse(localStorage.getItem("userDetails")).id;

    //Fetching wallet transactions
    this.accountProvider.fetchWalletTransactions(id).then((res) => {
      if (res["status"] == "1") {
        localStorage.setItem('wallet_balance', res["wallet_balance"])
        console.log(res)
      }
    }).catch((err) => {
      console.log(err);
    })

    //fetching cities, banners, outlet list
    this.commonProvider.fetchHomePageData().then((res) => {
      console.log(res);

      if (res["status"] == 1) {
        this.cities = res["cities"];
        this.shops = res["shops"];
        this.banners = res["banners"];
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  gotoshopproduct(liquorshopid, item) {
    localStorage.setItem("liquorshopid", liquorshopid);
    localStorage.setItem('shopDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/outlet-ordering-menu');
  }

  gotoliqudityVault() {
    let uId = this.authService.getUserId();
    this.navCtrl.navigateForward('/vaulthome');
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;
        localStorage.setItem('uniqueDeviceID', this.UniqueDeviceID);
        // this.helper.showErrorCustom(this.UniqueDeviceID);
        console.log(this.UniqueDeviceID);
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }

  cart() {
    this.navCtrl.navigateForward('/cart')
  }

  search() {
    this.navCtrl.navigateForward('/search')
  }

  /**
   * This method is for calling to show distance list 
   */
  async filterDistance() {
    const modal = await this.modalController.create({
      component: FilterDistanceComponent,
      // breakpoints: [0.80],
      // initialBreakpoint: 0.80,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data) => {
      if (data['data'] != undefined) {
        var user = data['data'];
        console.log(user);
        localStorage.setItem('addExtendedData', JSON.stringify(user));
      }
    });
    return await modal.present();
  }

  openMenu() {
    this.menu.enable(true, 'content');
    this.menu.open('content');
  }

  gotoReserveValut() {
    this._router.navigate(['/vaultselected']);
  }

}
