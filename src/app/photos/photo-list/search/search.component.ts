import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  
  constructor() { }

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      //.subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
