import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule { }