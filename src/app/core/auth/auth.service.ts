import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

const API_URL: string = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string): Observable<Object> {
        return this.http.post(`${API_URL}/user/login`, {userName, password});
    }
}