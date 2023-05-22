import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbalancePageRoutingModule } from './viewbalance-routing.module';

import { ViewbalancePage } from './viewbalance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbalancePageRoutingModule
  ],
  declarations: [ViewbalancePage]
})
export class ViewbalancePageModule {}
