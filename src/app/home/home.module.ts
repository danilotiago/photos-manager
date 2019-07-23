import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { InputMessageModule } from "../shared/components/input-message/input-message.module";
import { RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        ReactiveFormsModule,
        InputMessageModule
    ],
    // components com escopo de pagina nao precisam ser exportados
    declarations: [
        HomeComponent,
        SigninComponent,
        SignupComponent
    ]
})
export class HomeModule { }