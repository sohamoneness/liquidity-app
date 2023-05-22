import { Component, OnInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  NavController,
  Platform,
  ToastController,
  IonRouterOutlet,
  AlertController,
  ModalController
} from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthProvider } from 'src/app/services/auth.service';
import { HelperProvider } from 'src/app/services/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name = '';
  mail = '';
  mobile = '';
  password = '';
  conf_password = '';

  constructor(
    public platform: Platform,
    private location: Location,
    private alertController: AlertController,
    public router: Router,
    private authService: AuthenticationService,
    private authProvider: AuthProvider,
    public helper: HelperProvider,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  /**
   * This method is for connecting user registration API
   */
  submitRegistration() {
    //Validation
    if (this.name == "") {
      this.helper.presentAlert("Please enter your name")
    } else if (this.mobile == "") {
      this.helper.presentAlert("Please enter your mobile number")
    } else if (this.mail == "") {
      this.helper.presentAlert("Please enter your email id")
    } else if (this.password == "") {
      this.helper.presentAlert("Please enter your password")
    } else if (this.password != this.conf_password) {
      this.helper.presentAlert("Password you have entered does not match")
    } else {

      let data = {
        "name": this.name,
        "password": this.password,
        "email": this.mail,
        "mobile": this.mobile,
      }
      this.authProvider.userRegistration(data).then((res) => {
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);
          localStorage.setItem("user_id", res["id"]);
          this.navCtrl.navigateForward('/otpverification');
          console.log(res)

        }
        else {
          this.helper.presentAlert(res["message"]);

        }
      })

    }


  }
}
