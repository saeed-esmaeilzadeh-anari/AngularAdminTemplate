import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../../models/store/Category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() info:Category;
  @Output() setStatus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setDescription(){
    this.info.description = "مقدار پیش فرض توضیحات گروه محصول";
  }

}
