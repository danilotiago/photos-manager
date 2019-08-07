import { HttpResponse } from '@angular/common/http';
import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewPhoto } from './new-photo.model';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  filePreview: string = '';
  percentDone: number = 0;

  constructor(
    private formBuilder: FormBuilder, 
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true] // valor padrao eh true e sem validacao
    });
  }

  upload() {
    const newPhoto = this.photoForm.getRawValue() as NewPhoto;
    newPhoto.file = this.file; // pega o arquivo no formato de File
    
    this.photoService.upload(newPhoto)
      // sucesso ou falha, executara o codigo do finalize
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUsername()]);
      }))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.alertService.success('Upload complete', true);
        }
      }, 
      err => {
        console.log(err);
        this.alertService.danger('Upload error', true);
      });
  }

  handleFile(file: File) {
    this.file = file;

    const reader = new FileReader();
    // pega o base64 da imagem
    reader.readAsDataURL(file);
    
    // por ser assincrono, so pega quando estiver carregado
    // casting do parametro para any
    reader.onload = (event: any) => this.filePreview = event.target.result;
  }
}
