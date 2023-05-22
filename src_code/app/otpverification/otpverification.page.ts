import { Platform, NavController, ModalController, MenuController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController, IonRouterOutlet, AlertController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthProvider } from 'src/app/services/auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {
  otp = '';
  ph_number = '';
  latitude : any = '';
  longitude : any = '';

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
    private authProvider: AuthProvider,
    private geolocation : Geolocation

  ) { }

  ngOnInit() {
    this.ph_number = localStorage.getItem("phnumber");
  }

  resendOtp() {

  }

  /**
   * This method is for calling handling login through submit otp and mobile number 
  */
  submitOtpVerification() {
    //Validation check
    if (this.otp == '') {
      this.helper.presentAlert("Please enter OTP");
    } else {
      let data = {
        "mobile": this.ph_number,
        "otp": this.otp,
        
      }
      this.authProvider.verifyMobileUser(data).then((res) => {
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);
          console.log(res);
          if (res["status"]=='1') {
            localStorage.setItem("user_id", res["user"].id);
            // this.geolocation.getCurrentPosition().then((resp) => {
            //   this.latitude = resp.coords.latitude;
            //   this.longitude = resp.coords.longitude;
            //   let currentAddress = {
            //     lat : this.latitude,
            //     long : this.longitude
            //   }
            //   //****  current position is saved in localStorage  **** //
            //   localStorage.setItem('currentAddress',JSON.stringify(currentAddress))
            // }).catch((error) => {
            //   console.log('Error getting location', error);
            // });
            if (res["user"].name=='') {
              this.navCtrl.navigateRoot('/new-account');
            } else {
              localStorage.setItem("userDetails", JSON.stringify(res['user']));              
              this.navCtrl.navigateRoot('/homenew');
            }
          }

        }else{
          this.helper.presentAlert(res["message"]);
        }
      })
    }
  }
}
