import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PhotoModule
    ],
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }