import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchListStorePageRoutingModule } from './watch-list-store-routing.module';

import { WatchListStorePage } from './watch-list-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchListStorePageRoutingModule
  ],
  declarations: [WatchListStorePage]
})
export class WatchListStorePageModule {}
