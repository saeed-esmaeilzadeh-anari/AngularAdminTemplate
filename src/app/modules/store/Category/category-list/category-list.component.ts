import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/store/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories:Category[] = [];
  selectedCategory:Category;

  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.categories.push(new Category(1, "Digital", "test", true));
    this.categories.push(new Category(2, "Sport", "test", false));
    this.categories.push(new Category(3, "ebook", "test 123", false));
    this.categories.push(new Category(4, "other", "test", true));
  }

  setSelectedCategory(model:Category){
    this.selectedCategory = model;
  }

  setCategoryStatus(id:number)
  {
    // let item = this.categories.find(q => q.id == id);
    // item.isActive = !item.isActive;

    this.selectedCategory.isActive = !this.selectedCategory.isActive;

  }

}
