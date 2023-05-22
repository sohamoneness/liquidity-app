import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterDistanceResultPageRoutingModule } from './filter-distance-result-routing.module';

import { FilterDistanceResultPage } from './filter-distance-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterDistanceResultPageRoutingModule
  ],
  declarations: [FilterDistanceResultPage]
})
export class FilterDistanceResultPageModule {}
