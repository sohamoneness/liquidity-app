import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonProvider } from '../services/common.service';
import { HelperProvider } from '../services/helper.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {
  name = '';
  mail = '';
  gender = '';

  constructor(public helper: HelperProvider, private commonService : CommonProvider, private navCtrl : NavController) { }

  ngOnInit() {
  }

   /**
   * This method is for connecting user registration API
   */
  submitRegistration() {
    //Validation
    if (this.name == "") {
      this.helper.presentAlert("Please enter your name")
    } else if (this.mail == "") {
      this.helper.presentAlert("Please enter your email id")
    } else {
      let data = {
        "id" : localStorage.getItem("user_id"),
        "name": this.name,
        "email": this.mail,
        "gender": this.gender,
      }
      this.commonService.updateProfile(data).then((res) => {
        console.log(res);
        if (res["status"] == '1') {
          this.helper.suucessAlert(res["message"]);    
          localStorage.setItem("userDetails", JSON.stringify(res['user'])); 
          this.navCtrl.navigateRoot('/homenew');
          console.log(res)
        }
        else {
          this.helper.presentAlert(res["message"]);
        }
      })
    }
  }

}
