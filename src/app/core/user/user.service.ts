import { User } from './user.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // quando este subject emitir valores, quem se inscrever nele sera notificado
  // behaviorSubject() => como o servico sera criado antes dos components, 
  // pode ser que ele avise e os components ainda nao foram criados, logo,
  // o behavior segura o valor emitido caso ainda ninguem ouviu (se inscreveu)
  // e assim que alguem se inscrever ele emite o valor
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private username: string = '';

  constructor(private tokenService: TokenService) { 
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  // quem chamar o getUser() obterá o retorno do userSubject como observable
  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  getUsername(): string {
    return this.username;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();

    // pega o retorno do jwt e ja faz um parse para o tipo User
    const user = jwt_decode(token) as User;

    this.username = user.name;

    // notifica os incritos do subject para obter o user
    this.userSubject.next(user);
  }
}
