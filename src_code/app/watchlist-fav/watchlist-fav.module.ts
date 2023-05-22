import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchlistFavPageRoutingModule } from './watchlist-fav-routing.module';

import { WatchlistFavPage } from './watchlist-fav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchlistFavPageRoutingModule
  ],
  declarations: [WatchlistFavPage]
})
export class WatchlistFavPageModule {}
