import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Photo } from './../photo/photo.model';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);

    // hack para verificar se tem photo, caso contrario, no 
    // erro, redirecionamos para not-found
    this.photo$.subscribe(() => {}, err => {
      console.log(err);
      this.router.navigate(['/not-found']);
    });
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['/user', this.userService.getUsername()])
      });
  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe(liked => {
        // se foto foi curtida, fazemos um recarregamento
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      })
  }

}
