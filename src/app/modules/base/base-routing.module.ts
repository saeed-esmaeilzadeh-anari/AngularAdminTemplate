import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinceListComponent } from './province/province-list/province-list.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { ProvinceInfoComponent } from './province/province-info/province-info.component';


const routes: Routes = [
  {path:"", component:ProvinceListComponent, 
  data: {
    title: 'لیست استان ها'
  },},
  {path:"province", component:ProvinceListComponent,  data: {
    title: 'لیست استان ها'
  },},
  {path:"province/add", component:ProvinceInfoComponent,  data: {
    title: 'افزودن استان جدید'
  }},
  {path:"city", component:CityListComponent,  data: {
    title: 'لیست شهر ها'
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
