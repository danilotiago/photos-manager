import { LoadingService } from './loading.service';
import { LoadingType } from './loading-type';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>;

    constructor(private loadingService: LoadingService) { }
    
    ngOnInit() {
        this.loading$ = this.loadingService
            .getLoading()
            // pega o valor da string do enum retornado pelo observable
            .pipe(map(loadingType => loadingType.valueOf()));
    }
}