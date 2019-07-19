import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userNotTakenValidatorService: UserNotTakenValidatorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullname: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      username: ['', [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        // validadores assincronos vao no terceiro parametro
        // validador para verificar o username repetido na base
        this.userNotTakenValidatorService.checkUserNameTaken() 
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]]
    });
  }

}
