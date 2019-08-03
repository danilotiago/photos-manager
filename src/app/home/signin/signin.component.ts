import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.titleService.setTitle('Login');

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

    if (this.platformDetectorService.isPlatformBrowser()) {
      this.usernameInput.nativeElement.focus();
    }
  }

  login() {
    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.router.navigate(['user', username]),
        err => {
          console.log(err);
          alert('Invalid username or password.');
          
          if (this.platformDetectorService.isPlatformBrowser()) {
            this.usernameInput.nativeElement.focus();
          }
        }
      );
  }
}
