import { ShowIfLoggedDirective } from './show-if-logged.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [ShowIfLoggedDirective],
    exports: [ShowIfLoggedDirective]
})
export class ShowIfLoggedModule { }