import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NewUser } from './newUser.model';

const API_URL = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class SignupService {

    constructor(private http: HttpClient) { }

    chackUsernameTaken(username: string) {
        return this.http.get(`${API_URL}/user/exists/${username}`);
    }

    signup(newUser: NewUser) {
        return this.http.post(`${API_URL}/user/signup`, newUser);
    }
}