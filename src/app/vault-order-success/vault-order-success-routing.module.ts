import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaultOrderSuccessPage } from './vault-order-success.page';

const routes: Routes = [
  {
    path: '',
    component: VaultOrderSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultOrderSuccessPageRoutingModule {}
