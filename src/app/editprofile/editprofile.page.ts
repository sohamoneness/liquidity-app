
import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  gender: any = [];
  user: any = [];
  user_name: any = [];
  user_mail: any = [];
  user_mobile: any = [];
  date: any = [];
  today_date: any = [];
  genderId: any = [];
  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private helper: HelperProvider,
    private datePipe: DatePipe,
    public platform: Platform,

  ) {
    this.gender.push({
      id: '1',
      name: 'male',
    },
      {
        id: '2',
        name: 'female',
      },
    )
  }
  public optionsgender(): void { //here item is an object 
    console.log(this.genderId);
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log('edit', this.user);
    this.user_mail = this.user.email;
    this.user_name = this.user.name;
    this.user_mobile = this.user.mobile;
    this.genderId = this.user.gender;
    this.date = this.user.dob;

    // this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
    console.log(this.today_date)
  }
  submitValues() {
    // var date = new Date();
    // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
    this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
    console.log(this.today_date)
    if (this.user_mail == '') {
      this.helper.presentToast("Please enter your mail");
    } else if (this.user_mobile == '') {
      this.helper.presentToast("Please enter your mobile");
    } else if (this.user_name == '') {
      this.helper.presentToast("Please enter your name");
    } else {
      let data = {
        "id": this.user.id,
        "name": this.user_name,
        "mobile": this.user_mobile,
        "gender": this.genderId,
        "dob": this.today_date
      }
      this.userDetails.updateProfile(data).then((res) => {
        if (res["status"] == '1') {
          this.helper.presentToast(res["message"]);
          localStorage.setItem("userDetails", JSON.stringify(res['user']));
          this.navCtrl.pop();
          this.navCtrl.navigateForward('/homenew');

        }
        else {
          this.helper.presentToast(res["message"]);
        }
      })
    }
  }
  setDate() {
    // var date = new Date();
    // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
    this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
    console.log(this.today_date)
  }
}
