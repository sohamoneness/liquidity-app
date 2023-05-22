import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaultOrderDetailsPageRoutingModule } from './vault-order-details-routing.module';

import { VaultOrderDetailsPage } from './vault-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaultOrderDetailsPageRoutingModule
  ],
  declarations: [VaultOrderDetailsPage]
})
export class VaultOrderDetailsPageModule {}
