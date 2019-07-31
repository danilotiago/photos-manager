import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment.model';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  
  comments$: Observable<PhotoComment[]>;
  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;

    this.photoService.addComment(this.photoId, comment)
      .subscribe(() => this.commentForm.reset());
  }

}