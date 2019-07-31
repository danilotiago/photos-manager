import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

const API_URL: string = environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    authenticate(userName: string, password: string): Observable<Object> {
        return this.http
            .post(`${API_URL}/user/login`, 
                {userName, password}, 
                {observe: 'response'} // obtem a response completa, inclusive header
            )
            // executa o tap antes de retornar a resp para o inscrito
            .pipe(tap(res => {
                // obtem o token da resposta e armazena pelo servico tokenService
                const authToken = res['headers'].get('x-access-token');
                this.userService.setToken(authToken);
                console.log(`User ${userName} authenticated with token ${authToken}`)
            }));
    }
}