import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BaseRequestService } from "../services/base-requests.service";
import { map } from 'rxjs/operators';
import { EMPTY, Observable, of, ReplaySubject } from "rxjs";
import { IUser } from "../interfaces/user";
import jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class AuthenticationService{
    
    public userSubject = new ReplaySubject<IUser>(1);

    constructor(
        private readonly router: Router,
        private readonly baseRequests: BaseRequestService
    ){
        let data = localStorage.getItem('currentUser');
        if(data !== null)
            this.userSubject.next(JSON.parse(data));
    }

    public get userValue(): any {
        let data = localStorage.getItem('currentUser');
        if(data === null)
            return null;

        return JSON.parse(data);
    }

    public login$(email: string, password: string): Observable<boolean> {
        return this.baseRequests.sendPostRequest$(
            'api/auth/login', 
            { email: email, password: password })
        .pipe(
            map(response => response.token),
            map(token => {
                try {                    
                    let decodedToken = this.getDecodedAccessToken(token);
                    if( decodedToken !== null){
                        let user: IUser = {
                            id: decodedToken['id'],
                            email: email,
                            token: token,
                            role: decodedToken['role'],
                        };
    
                        localStorage.setItem('currentUser', JSON.stringify(user));
    
                        this.userSubject.next(user);   
                        return true;
                    }

                  
                } catch (error) {
                    console.error(error);
                   
                }     
                return false;
            }),
        );
    }

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.userSubject.next(undefined);
        this.router.navigate(['/home']);
    }

    private getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
      }
}
