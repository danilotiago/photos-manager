import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit(): void {
    // inscricao nos parametros da rota ativa para que toda vez que
    // os parametros forem modificados sermos notificados para buscar os dados 
    // novamente. Sem isso, nao conseguimos buscar as fotos do usuario da rota
    // novamente e fazer uma nova renderizacao de dados pois o component nao 
    // ira ser carregado novamente, logo, os dados de fotos nao serao renderizados
    // novamente, por isso estamos inscritos nos parametros das rotas ouvindo
    // modificacoes
    this.activatedRoute.params.subscribe(params => {
      this.username = params.username;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load() {
    this.photoService.listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos)

        if (! photos.length) {
          this.hasMore = false;
        }
      })
  }
}
