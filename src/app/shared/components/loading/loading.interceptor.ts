import { LoadingService } from './loading.service';
import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {
    
    constructor(private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | HttpHeaderResponse | 
        HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
        return next.handle(req)
            // da um tap no evento retornado pelo next e executa uma logica, sem mexer na resposta, no retorno
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadingService.end();
                } else {
                    this.loadingService.start();
                }
            }))
    }
}