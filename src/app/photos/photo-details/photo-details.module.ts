import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMessageModule } from '../../shared/components/input-message/input-message.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PhotoModule,
        InputMessageModule
    ],
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }