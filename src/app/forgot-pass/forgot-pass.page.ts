import { Platform,NavController, ModalController,MenuController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef,ViewChildren,QueryList  } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController,IonRouterOutlet ,AlertController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  usermail = '';

  constructor(
  	private authService: AuthenticationService,
      private navCtrl: NavController,
      public toastController: ToastController,
      public helper: HelperProvider,
      public router: Router,
      public platform: Platform,
      public cdr: ChangeDetectorRef,
      public modalController: ModalController,
      private location: Location,
      private alertController: AlertController,
      public menuCtrl: MenuController,
      private userDetails: UserDetailsService,
  	) { }

  ngOnInit() {
  }
submitValues(){
			let data = {
                  "email": this.usermail,
                  
                }
                this.userDetails.forgotPass(data).then((res) => {
                  if (res["status"] == '1') {
                    this.helper.presentToast(res["message"]);
                    this.navCtrl.navigateRoot('/login');
                    this.helper.showErrorCustom('Please Check your Mail to reset your password')
                  }
                  else{
                    this.helper.presentToast(res["message"]);
                    this.navCtrl.navigateRoot('/login');
                    this.helper.showErrorCustom('Please Check your Mail to reset your password')

                  }
                })
}
}
