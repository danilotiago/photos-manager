import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { MenuModule } from './../../shared/components/menu/menu.module';
import { LoadingModule } from './../../shared/components/loading/loading.module';
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
        LoadingModule,
        MenuModule,
        ShowIfLoggedModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }