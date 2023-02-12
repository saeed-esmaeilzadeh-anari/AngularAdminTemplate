import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticate:boolean = false;

  constructor(private http:HttpClient) { 
    if(localStorage.getItem('token')){
      this.isAuthenticate = true;
    }
  }
  
  authenticate(userName:string,password:string):Observable<any>{
    const loginInfo = {userName,password};
    return this.http.post(environment.api + "/Account", loginInfo);
  }

  getNewTokenWithRefreshToken():Observable<any>{
    const refreshToken = localStorage.getItem("refresh-token");
    return this.http.post(environment.api + "/Account/GetNewToken", {refreshToken});
  }

}
