import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NewUser } from './newUser.model';
import { environment } from './../../../environments/environment';

const API_URL: string = environment.API_URL;
// quem fara a injecao sera o home.module
@Injectable()
export class SignupService {

    constructor(private http: HttpClient) { }

    chackUsernameTaken(username: string) {
        return this.http.get(`${API_URL}/user/exists/${username}`);
    }

    signup(newUser: NewUser) {
        return this.http.post(`${API_URL}/user/signup`, newUser);
    }
}