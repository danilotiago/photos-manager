import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;
  fromUrl: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    // pega a rota a ser redirecionada no queryParam
    this.activatedRoute.queryParams
      .subscribe(params => this.fromUrl = params.fromUrl);

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
        () => {
          // se for passada uma rota por parametro, redireciona para ela
          // se nao, redireciona para default
          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl)
          } else {
            this.router.navigate(['user', username])
          }
        },
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
