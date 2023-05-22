import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthProvider } from '../services/auth.service';
import { HelperProvider } from '../services/helper.service';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.page.html',
  styleUrls: ['./login-otp.page.scss'],
})
export class LoginOtpPage implements OnInit {
  phone = '';
  
  constructor(private authProvider : AuthProvider, private helper: HelperProvider, private navCtrl : NavController) { }

  ngOnInit() {
  }

  /**
   * This method is for calling handling login via mobile number 
  */
  loginViaMobile(){
    //Validation checking
    if (this.phone=='') {
      this.helper.presentToast('Please enter your contact number');
    } if (this.phone.length!=10) {
      this.helper.presentToast('Please enter 10 digit contact number');
    } 
     else {
      this.helper.presentLoading();
      this.authProvider.userLoginviaMobile(this.phone).then(res=>{
        console.log(res);
        if (res["status"] == '1') {
          this.helper.dismissLoader();
          // navigate to page for otp verification and save ph number
          localStorage.setItem('phnumber',this.phone);
          this.navCtrl.navigateForward("/otpverification"); 
        }
        else{
          this.helper.dismissLoader();
          this.helper.presentAlert('Please enter valid contact number')
        }        
      })
    }
  }

}
