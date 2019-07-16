import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    imports: [CommonModule],
    // components com escopo de pagina nao precisam ser exportados
    declarations: [
        SigninComponent
    ]
})
export class HomeModule { }