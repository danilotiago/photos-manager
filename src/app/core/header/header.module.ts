import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header.component';
import { AlertModule } from '../../shared/components/alert/alert.module';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AlertModule,
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }