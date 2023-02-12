import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  /******/

import { BaseRoutingModule } from './base-routing.module';
import { ProvinceListComponent } from './province/province-list/province-list.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { ProvinceInfoComponent } from './province/province-info/province-info.component';


@NgModule({
  declarations: [ProvinceListComponent, CityListComponent, ProvinceInfoComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    ReactiveFormsModule /******/
  ]
})
export class BaseModule { }
