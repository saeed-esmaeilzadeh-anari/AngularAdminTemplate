import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/store/Category';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css']
})
export class CategoryInfoComponent implements OnInit {

  category:Category = new Category(0, "", "", false);

  constructor() { }

  ngOnInit(): void {
  }

  save():void{
    console.log(this.category);
    alert("save succ...");
  }

}
