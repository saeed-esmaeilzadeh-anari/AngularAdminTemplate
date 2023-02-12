import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { Category } from '../../models/store/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.api + "/category";
  constructor(public http:HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.url);
  }

  get(id:number):Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  add(model:Category):Observable<any> {
    return this.http.post(this.url, model);
  }

  edit(id:number,model:any):Observable<any> {
    return this.http.put(this.url + "/" + id, JSON.stringify(model));
  }
}


//Inject Models:
//Singleton
//Scoped
//Transient