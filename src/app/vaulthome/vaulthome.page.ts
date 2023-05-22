import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-vaulthome',
  templateUrl: './vaulthome.page.html',
  styleUrls: ['./vaulthome.page.scss'],
})
export class VaulthomePage implements OnInit {

  constructor(
    // private authService: AuthenticationService,
        // private navCtrl: NavController,
        // private userDetails: UserDetailsService,
        // private alertCtrl: AlertController,
        // private helper: HelperProvider,
        // private plt: Platform,
        private _router:Router,
  ) { }

  ngOnInit() {
    
  }
  gotoReserveValut(){
    this._router.navigate(['/vaultselected']);
  }

  gotoCategoryOutlet(){
    this._router.navigate(['/category']);
  }

  gotoRedeemANDBalance(){
    this._router.navigate(['/vaultbalance']);
  }
  gotoVaultOrderHistory(){
    this._router.navigate(['/vault-order-history']);
  }
  gotoFAQ(){
    this._router.navigate(['/faq']);
  }

  search(){
    this._router.navigate(['/search'])
  }
}
