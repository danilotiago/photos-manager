import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }]
})
export class LoadingModule { }