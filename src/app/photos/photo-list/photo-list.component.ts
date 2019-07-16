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
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.username = this.activatedRoute.snapshot.params.username;
  }

  load() {
    this.photoService.listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos)

        if (! photos.length) {
          this.hasMore = false;
        }
      })
  }
}
