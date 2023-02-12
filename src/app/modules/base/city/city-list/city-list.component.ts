import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor() { }

  temp:string ="ABCCCC"

  ngOnInit(): void {
  }

  childRefreshData(value)
  {
    alert('product list click in refresh data : ' + value);
  }

  testOnclick()
  {
    
  }

}
