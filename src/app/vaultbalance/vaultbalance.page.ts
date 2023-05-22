import { Component, OnInit } from '@angular/core';
import { HelperProvider } from '../services/helper.service';
import { VaultProvider } from '../services/vault.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaultbalance',
  templateUrl: './vaultbalance.page.html',
  styleUrls: ['./vaultbalance.page.scss'],
})
export class VaultbalancePage implements OnInit {

  public userId: any = 0;
  orderDetails = [];

  constructor(
    private vaultProvider: VaultProvider,
    private helper: HelperProvider,
    private _router: Router,
  ) {
    this.userId = localStorage.getItem('user_id');
  }

  ngOnInit() {
    this.vaultProvider.getVaultOrderList(localStorage.getItem("user_id")).then((res) => {
      if (res["status"] == 1) {
        this.orderDetails = res["products"];
        console.log(res);
      }
    })
  }

  /**
   * This method is for showing balance div
   * @param orderDetails
   */
  public viewBalance(orderDetails) {
    console.log(orderDetails);
    $('.view_balance').empty();
    let orderDataTemplate = '<ion-grid><ion-row class="ion-no-padding"><ion-col size="4"><div class="unit"><p>Total Units <span>' + orderDetails.quantity + '</span></p></div></ion-col><ion-col size="4"><div class="unit"><p>Units Redeemed <span>' + orderDetails.total_quantity_used + '</span></p></div></ion-col><ion-col size="4"><div class="unit"><p>Remaining Units <span>' + orderDetails.balance_quantity + '</span></p></div></ion-col></ion-row></ion-grid>';
    if (orderDetails.redeems.length > 0) {
      orderDataTemplate += '<ion-row><ion-col size="4"><p class="content ion-text-left">OUTLET</p></ion-col><ion-col size="4"><p class="content ion-text-center">DATE</p></ion-col><ion-col size="4"><p class="content ion-text-right">UNITS</p></ion-col></ion-row>';
      orderDetails.redeems.forEach((redeemdata) => {
        orderDataTemplate += '<ion-row><ion-col size="4"><p class="content black ion-text-left"<span>' + redeemdata.shop_name + '</span></p></ion-col><ion-col size="4"><p class="content black ion-text-center"<span>' + redeemdata.redeem_date + '</span></p></ion-col><ion-col size="4"><p class="content black ion-text-right"<span>' + redeemdata.quantiy + '</span></p></ion-col></ion-row>';
      });
    }
    $('#divCount' + orderDetails.id).empty()
      .append(orderDataTemplate);
    console.log("testing")
  }

  /**
   * This method is for navigating to redeem page
   * @param orderDetails
   */
  public redeem(orderDetails) {
    console.log("remaining>>",Number(orderDetails.balance_quantity));

    if(Number(orderDetails.balance_quantity)<=0){
      this.helper.presentAlert("You do not have enough unit left in your vault to continue. Please recharge again and enjoy your drink");
    }else{
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    console.log(orderDetails)
    this._router.navigate(['/vault-redeem/' + orderDetails]);
    }
    
  }


  gotoViewBalance(){
    this._router.navigate(['/viewbalance']);
  }
}
