import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../security/authentication.service';
import { BaseRequestService } from '../services/base-requests.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly authenticationService: AuthenticationService, private readonly baseRequestService: BaseRequestService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const user = this.authenticationService.userValue;
        if(user !== null){
            const isLoggedIn = user && user.token;
            const isApiUrl = request.url.startsWith(this.baseRequestService.BACKEND_URL);
            if (isLoggedIn && isApiUrl) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
            }
        }       

        return next.handle(request);
    }
}