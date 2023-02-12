import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CategoryInfoComponent } from './Category/category-info/category-info.component';
import { CategoryInfoWithReactiveFormsComponent } from './Category/category-info-with-reactive-forms/category-info-with-reactive-forms.component';
import { CategoryListWithAPIComponent } from './Category/category-list-with-api/category-list-with-api.component';


const routes: Routes = [
  {path:"", component:CategoryListComponent,data: {
    title: 'گروه بندی محصولات'
  }},
  {path:"categoryWithAPI", component:CategoryListWithAPIComponent,data: {
    title: 'گروه بندی از سرور'
  }},
  {path:"category/add", component:CategoryInfoComponent,data: {
    title: 'افزودن گروه جدید'
  }},
  {path:"category/edit/:id", component:CategoryInfoWithReactiveFormsComponent,data: {
    title: 'ویرایش اطلاعات گروه'
  }},
  {path:"category/addWithReactive", component:CategoryInfoWithReactiveFormsComponent,data: {
    title: 'گروه جدید ورژن 2'
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
