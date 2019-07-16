import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../core/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        '', // valor default para o campo
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  login() {
    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => console.log('logged'),
        err => {
          console.log(err);
          alert('Invalid username or password.');
        }
      );
  }
}
