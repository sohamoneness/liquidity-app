import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchlistFavPage } from './watchlist-fav.page';

const routes: Routes = [
  {
    path: '',
    component: WatchlistFavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchlistFavPageRoutingModule {}
