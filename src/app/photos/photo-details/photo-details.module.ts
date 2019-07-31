import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        PhotoModule
    ],
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }