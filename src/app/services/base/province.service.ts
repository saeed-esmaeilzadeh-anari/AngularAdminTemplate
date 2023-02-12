import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Province } from '../../models/base/Province';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  url = environment.api + "/province";
  constructor(public http:HttpClient) { }
  

  getAll():Observable<any> {
    return this.http.get(this.url);
  }
}
