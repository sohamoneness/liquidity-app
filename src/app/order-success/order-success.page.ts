import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {
  user :any =[];
user_name :any =[];
order_data :any =[];
OrderDetails :any =[];
  shopDetails:any=[];
  mail :any =[];
  mobile :any =[];
  is_vault :any =[];
  payment_type :any =[];
  final_order_id='';
  selectData = '';
  constructor(
        private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router : Router,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    this.selectData = localStorage.getItem("selectedRadioData");
      console.log(this.user);
      this.mail=this.user.email;
      this.user_name=this.user.name;
      this.mobile=this.user.mobile;
      this.is_vault=localStorage.getItem('vault');
      this.final_order_id=localStorage.getItem('orderrr_id');
      console.log(this.is_vault);
      // if(localStorage.getItem('vault')=='0'){
        this.userDetails.fetchOrderHistroydetails(localStorage.getItem("orderrr_id")).then((res) => {
          if (res["status"]==1) {
            console.log('res',res);
            this.OrderDetails = res["order"];
            this.shopDetails = res["order"]["shop"];
            this.payment_type=res["order"]['payment_type'];
            
            console.log(this.payment_type);
          }
        })
      
    console.log(localStorage.getItem("liquorOrderId"));

    

  }


  gotoHome(){
    this.navCtrl.navigateRoot('/homenew');
  }
}
