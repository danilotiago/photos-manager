import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL: string = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string): Observable<Object> {
        return this.http
            .post(`${API_URL}/user/login`, 
                {userName, password}, 
                {observe: 'response'}
            )
            // executa o tap antes de retornar a resp para o inscrito
            .pipe(tap(res => {
                // obtem o token da resposta
                const authToken = res['headers'].get('x-access-token');
                console.log(`User ${userName} authenticated with token ${authToken}`)
            }));
    }
}