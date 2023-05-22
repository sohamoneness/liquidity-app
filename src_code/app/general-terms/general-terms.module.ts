import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralTermsPageRoutingModule } from './general-terms-routing.module';

import { GeneralTermsPage } from './general-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralTermsPageRoutingModule
  ],
  declarations: [GeneralTermsPage]
})
export class GeneralTermsPageModule {}
