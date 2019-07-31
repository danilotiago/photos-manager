import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [CommonModule],
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }