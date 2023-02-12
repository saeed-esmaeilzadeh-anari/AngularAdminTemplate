import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../../../services/store/category.service';
import { Category } from '../../../../models/store/Category';
import { ModalDirective } from 'ngx-bootstrap';
import { CategoryFeature } from '../../../../models/store/CategoryFeature';
import { DatePipe } from '@angular/common';
import { CategoryInfoComponent } from '../category-info/category-info.component';

@Component({
  selector: 'app-category-list-with-api',
  templateUrl: './category-list-with-api.component.html',
  styleUrls: ['./category-list-with-api.component.css'],
  //providers:[DatePipe]
})
export class CategoryListWithAPIComponent implements OnInit {

  categories:Category[] = [];
  selectedCategoryFeatures:CategoryFeature[] = [];

  //ViewChild for Code Input Tag
  @ViewChild('code') teacherCode: ElementRef;
  
  @ViewChild('myContainer') descriptionContainer: ElementRef;

  // -> #myModal
  @ViewChild('myModal') public myModal: ModalDirective;

  //ViewChild for ChildComponent
  @ViewChild("categoryInfo") categoryInfo:CategoryInfoComponent;

  constructor(private categoryService:CategoryService, private datePipe:DatePipe) { }

  showTeacherCode(){
    const code = this.teacherCode.nativeElement.value;
    this.descriptionContainer.nativeElement.innerHTML = '<img src="http://www.sepidaria.com/Content/img/logo-footer.png" />';

    //set value in Child Component Variable
    this.categoryInfo.category = this.categories[0];

    alert(code);
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      console.log(data);
      this.categories = data;
    })
  }

  showFeatures(index:number){
    this.selectedCategoryFeatures = this.categories[index].features;
    this.myModal.show();

    var currentDate = new Date();
    alert(this.datePipe.transform(currentDate, "yyyy-MM-dd"));

  }

}
