import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // attr do tipo observable criamos um $ no final
  user$: Observable<User>;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {
  }

}
