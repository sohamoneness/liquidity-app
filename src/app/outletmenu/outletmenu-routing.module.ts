import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletmenuPage } from './outletmenu.page';

const routes: Routes = [
  {
    path: '',
    component: OutletmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletmenuPageRoutingModule {}
