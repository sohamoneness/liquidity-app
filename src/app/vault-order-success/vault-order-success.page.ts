import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vault-order-success',
  templateUrl: './vault-order-success.page.html',
  styleUrls: ['./vault-order-success.page.scss'],
})
export class VaultOrderSuccessPage implements OnInit {
 user :any =[];
user_name :any =[];
order_data :any =[];
OrderDetails :any =[];
  mail :any =[];
  mobile :any =[];
  is_vault :any =[];
  payment_type :any =[];
  vault_order_id='';
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
      console.log(this.user);
      this.mail=this.user.email;
      this.user_name=this.user.name;
      this.mobile=this.user.mobile;
      this.vault_order_id=localStorage.getItem('vault_orderrr_id');
      this.is_vault=localStorage.getItem('vault');
      console.log(this.is_vault);
      // if(localStorage.getItem('vault')=='0'){
      //   this.userDetails.fetchOrderHistroydetails(localStorage.getItem("order_id")).then((res) => {
      //     if (res["status"]==1) {
      //       this.OrderDetails = res["order"];
      //       this.payment_type=res["order"]['payment_type'];
            
      //       console.log(this.payment_type);
      //     }
      //   })
      // }else{
        this.userDetails.fetchVaultOrderHistroydetails(this.vault_order_id).then((res) => {
          if (res["status"]==1) {
            this.OrderDetails = res["vault_order"];
            console.log(this.OrderDetails);
          }
        })
      // }
      
    console.log(localStorage.getItem("liquorOrderId"));

    

  }


  gotoHome(){
    this.navCtrl.navigateRoot('/homenew');
  }
}
