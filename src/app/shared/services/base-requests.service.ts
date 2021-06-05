import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BaseRequestService{

    public BACKEND_URL: string = 'http://localhost:8080/';

    constructor(private readonly http: HttpClient) {}

    public sendGetRequest$(path: string): Observable<any> {        
        return this.http.get(`${this.BACKEND_URL + path}`, { responseType: 'json'})
        .pipe(
            take(1),
        );
    }

    public sendPostRequest$(path: string, body: any): Observable<any> {
        return this.http.post(`${this.BACKEND_URL + path}`, body, { responseType: 'json'})
        .pipe(
            take(1),
        );
    }
}