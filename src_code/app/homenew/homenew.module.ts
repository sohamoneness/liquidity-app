import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomenewPageRoutingModule } from './homenew-routing.module';

import { HomenewPage } from './homenew.page';

import { FilterDistanceComponent } from '../filter-distance/filter-distance.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomenewPageRoutingModule
  ],
  declarations: [HomenewPage, FilterDistanceComponent]
})
export class HomenewPageModule {}
