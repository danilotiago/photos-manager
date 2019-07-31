import { PhotoOwnerOnlyDirective } from './photo-owner-only.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [PhotoOwnerOnlyDirective],
    exports: [PhotoOwnerOnlyDirective]
})
export class PhotoOwnerOnlyModule { }