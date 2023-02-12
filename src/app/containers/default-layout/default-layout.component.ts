import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../services/access-right/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./default-layout.component.css'],
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private authService:AuthenticationService, private router:Router){}

  public options = {
    position: ['bottom', 'left'],
    timeOut: 2000,
    lastOnBottom: false,
  };

  ngOnInit(){
    if(!this.authService.isAuthenticate){
      this.router.navigate(["/login"]);
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    this.authService.isAuthenticate = false;
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
