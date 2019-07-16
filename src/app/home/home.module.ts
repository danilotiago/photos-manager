import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { InputMessageModule } from "../shared/components/input-message/input-message.module";

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        InputMessageModule
    ],
    // components com escopo de pagina nao precisam ser exportados
    declarations: [
        SigninComponent
    ]
})
export class HomeModule { }