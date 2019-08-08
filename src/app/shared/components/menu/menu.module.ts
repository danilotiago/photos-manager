import { MenuComponent } from './menu.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [MenuComponent],
    exports: [MenuComponent]
})
export class MenuModule { }