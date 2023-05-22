import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralTermsPage } from './general-terms.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralTermsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralTermsPageRoutingModule {}
