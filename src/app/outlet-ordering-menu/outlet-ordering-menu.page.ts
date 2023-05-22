import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-outlet-ordering-menu',
  templateUrl: './outlet-ordering-menu.page.html',
  styleUrls: ['./outlet-ordering-menu.page.scss'],
})
export class OutletOrderingMenuPage implements OnInit {
  shopDetails :any =[];
  constructor(
    private authService: AuthenticationService,
        private navCtrl: NavController,
        private userDetails: UserDetailsService,
        private alertCtrl: AlertController,
        private helper: HelperProvider,
        private plt: Platform,
        private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
      console.log('shopDetails: ', this.shopDetails);
  }
  gotoOutLet(){
     this.navCtrl.navigateForward('/outletmenu');
  }
  cart(){
      this.navCtrl.navigateForward('/cart')
  }

  /**
   * This method for calling outlet number
   * @param number 
   */
  callNow(number) {
    console.log(number)
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


  showToolbar = false;

  onScroll(event: any) {
    console.log(event)
    console.log('details-',event.detail)
    if (event && event.detail && event.detail.scrollTop) {
      const scrollTop = event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }

  /**
   * This method is for showing house rules
   */
  async callHousingRules(){
    const alert = await this.alertCtrl.create({
      header: 'House Rules',
      message: this.shopDetails.house_rules,
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }]
    });

    await alert.present();
  }
}
