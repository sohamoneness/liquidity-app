import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ModalController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  user: any = [];
  user_name: any = [];
  user_mail: any = [];
  user_mobile: any = [];
  wallet: any = [];

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    public menuCtrl: MenuController,

  ) { }

  ngOnInit() {
    this.wallet = localStorage.getItem('wallet_balance');
  }
  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.user);
    this.user_mail = this.user.email;
    this.user_name = this.user.name;
    this.user_mobile = this.user.mobile;

    this.menuCtrl.close();
    // this.menuCtrl.enable(false);
    // localStorage.clear();
    console.log('storage clear')
  }
  editProfile() {
    this.navCtrl.navigateRoot('/editprofile');
  }

}
