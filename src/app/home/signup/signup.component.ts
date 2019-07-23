import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { SignupService } from './signup.service';
import { NewUser } from './newUser.model';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private router: Router, 
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      userName: ['', [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        // validadores assincronos vao no terceiro parametro
        // validador para verificar o userName repetido na base
        this.userNotTakenValidatorService.checkUserNameTaken() 
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]]
    });

    if (this.platformDetectorService.isPlatformBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;

    this.signupService.signup(newUser)
      .subscribe(() => this.router.navigate(['']),
      err => console.log(err))
  }
}
