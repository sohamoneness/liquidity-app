import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaultOrderSuccessPageRoutingModule } from './vault-order-success-routing.module';

import { VaultOrderSuccessPage } from './vault-order-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaultOrderSuccessPageRoutingModule
  ],
  declarations: [VaultOrderSuccessPage]
})
export class VaultOrderSuccessPageModule {}
