import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaultOrderDetailsPage } from './vault-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: VaultOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultOrderDetailsPageRoutingModule {}
