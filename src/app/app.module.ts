import { AlertModule } from './shared/components/alert/alert.module';
import { FooterModule } from './core/footer/footer.module';
import { RequestInterceptor } from './core/auth/request.interceptor';
import { HeaderModule } from './core/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    HeaderModule,
    FooterModule,
    PhotosModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [
    // define o provide de interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
