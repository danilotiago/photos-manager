import { PhotoComment } from './../photo/photo-comment.model';
import { Photo } from './../photo/photo.model';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.photoId;
    
    this.photo$ = this.photoService.findById(id);
    
  }

}
