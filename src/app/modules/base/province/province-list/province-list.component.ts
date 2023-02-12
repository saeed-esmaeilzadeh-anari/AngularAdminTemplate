import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { ProvinceService } from '../../../../services/base/province.service';
import { Province } from '../../../../models/base/Province';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  
  provinces:Province[] = [];
  isLoading:boolean = true;
  @Input() title :string;
  @Output() refreshData = new EventEmitter();

  constructor(public provinceService:ProvinceService) { }

  ngOnInit(): void {
    document.title = "لیست محصولات" ;
    this.provinceService.getAll().subscribe(result => {
      this.provinces = result;
      this.isLoading = false;
    });
  }
}
