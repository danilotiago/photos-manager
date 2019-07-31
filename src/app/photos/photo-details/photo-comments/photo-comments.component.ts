import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment.model';
import { switchMap, tap } from 'rxjs/operators';

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

  save(): void {
    const comment = this.commentForm.get('comment').value as string;

    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      // switchMap => faz o subscribe pro observable anterior (addComment()) e muda 
      // o fluxo para um novo subscribe abaixo (getComments()), retornando este observable
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      // tap() => aplica uma lógica antes de retornar o obervable anterior (getComments())
      // logo, aplica o resetForm 
      .pipe(tap(() => this.commentForm.reset()));
  }

}