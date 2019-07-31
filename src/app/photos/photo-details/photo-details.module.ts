import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMessageModule } from '../../shared/components/input-message/input-message.module';
import { PhotoOwnerOnlyModule } from '../../shared/directives/photo-owner-only/photo-owner-only.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PhotoModule,
        InputMessageModule,
        PhotoOwnerOnlyModule,
        ShowIfLoggedModule
    ],
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }