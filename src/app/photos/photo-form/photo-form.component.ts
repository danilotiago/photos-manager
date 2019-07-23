import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewPhoto } from './new-photo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder, 
    private photoService: PhotoService,
    private router: Router
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
      .subscribe(() => this.router.navigate(['']));
  }
}
