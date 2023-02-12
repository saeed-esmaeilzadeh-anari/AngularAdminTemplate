import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { NotificationsService } from "angular2-notifications";
import { AuthenticationService } from "../services/access-right/authentication.service";
import { Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private ngxService: NgxUiLoaderService,
    private _notifications: NotificationsService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        this.ngxService.stopAll();
        // this._notifications.warn(err.error.message || err.statusText);
        if (err.status === 401) {
            if(this.authenticationService.isAuthenticate)
            {
                return this.authenticationService.getNewTokenWithRefreshToken().pipe(
                    switchMap(result => {
                      localStorage.setItem("token", result.token);
                      localStorage.setItem("refresh-token", result.refreshToken);
                      const newRequest = request.clone({
                        setHeaders: {
                          Authorization: `Bearer ${result.token}`
                        }
                      });
              
                      return next.handle(newRequest);
                    })
                  );

                // this.authenticationService.getNewTokenWithRefreshToken().subscribe(result => {
                //     localStorage.setItem('token', result.token);
                //     localStorage.setItem('refresh-token', result.refreshToken);
                //     return next.handle(request);
                // });
                //ارسال مجدد آخرین درخواست کاربر به سمت سرور با توکن جدید
            } else {
                this.authenticationService.isAuthenticate = false;
                this.router.navigate(["/login"]);
            }
        }
        if (err.status === 400) {
            // console.log(err.error)
            //    alert(err.error.message);
            this._notifications.warn(err.error || err.statusText);
        }

        const error = err.error || err.statusText;
        return throwError(error);
    }));
  }
}
