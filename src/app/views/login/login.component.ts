import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/access-right/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    this.authService.authenticate(this.userName, this.password).subscribe(result => {
      this.authService.isAuthenticate = true;
      localStorage.setItem('token', result.token);
      localStorage.setItem('refresh-token', result.refreshToken);
      this.router.navigate(["/"]);
    })
  }

}
