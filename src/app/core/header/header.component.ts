import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // attr do tipo observable criamos um $ no final
  user$: Observable<User>;

  constructor(
    private userService: UserService, 
    private router: Router) {
    this.user$ = userService.getUser();
   }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
