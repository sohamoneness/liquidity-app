import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbalancePage } from './viewbalance.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbalancePageRoutingModule {}
