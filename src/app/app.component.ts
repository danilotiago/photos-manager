import { Component } from '@angular/core';

import { Photo } from './photos/photo/photo.model';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }
}
