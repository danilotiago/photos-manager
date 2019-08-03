import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    // obtem o evento de rotas
    this.router.events
      // filtra (deixa passar) apenas se for navigationEnd
      .pipe(filter(event => event instanceof NavigationEnd))
      // pega a rota ativa (pois ela é navigationEnd)
      .pipe(map(() => this.activatedRoute))
      // faz um map e obtem apenas a rota filha mais especifica
      .pipe(map(route => {
        while(route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      // ignora o observable anterior pela rota obtida e pega apenas o data, retornando um observable
      .pipe(switchMap(route => route.data))
      // inscricao no evento e alteracao do titulo
      .subscribe(event => this.titleService.setTitle(event.title))
  }
}