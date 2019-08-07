import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoadingService {

    loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
            // retorna como observable quem se inscrever no subject
            .asObservable()
            // por padrao, o primeiro valor a ser retornado sera stopped
            .pipe(startWith(LoadingType.STOPPED))  
    }

    // emite o loading
    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    // emite o stopped
    end() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}