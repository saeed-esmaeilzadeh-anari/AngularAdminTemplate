import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CategoryDetailsComponent } from './Category/category-details/category-details.component';
import { CategoryInfoComponent } from './Category/category-info/category-info.component';
import { CategoryInfoWithReactiveFormsComponent } from './Category/category-info-with-reactive-forms/category-info-with-reactive-forms.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListWithAPIComponent } from './Category/category-list-with-api/category-list-with-api.component';
import { ModalModule } from 'ngx-bootstrap';

//123
//صد و بیست و سه

@NgModule({
  declarations: [CategoryListComponent, CategoryDetailsComponent, 
    CategoryInfoComponent, CategoryInfoWithReactiveFormsComponent,
     CategoryListWithAPIComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreRoutingModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers:[DatePipe]
})
export class StoreModule { }
