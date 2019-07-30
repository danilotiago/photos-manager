import { PhotoModule } from './../photo/photo.module';
import { InputMessageModule } from './../../shared/components/input-message/input-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoFormComponent } from './photo-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        InputMessageModule,
        PhotoModule
    ]
})
export class PhotoFormModule { }