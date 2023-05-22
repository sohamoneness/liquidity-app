import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomenewPage } from './homenew.page';
import { FilterDistanceComponent } from '../filter-distance/filter-distance.component'; 
const routes: Routes = [
  {
    path: '',
    component: HomenewPage
  },
  {
    path: '/filter',
    component : FilterDistanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomenewPageRoutingModule {}
