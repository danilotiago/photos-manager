import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string): Photo[] {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if (! descriptionQuery) {
      return photos;
    }

    return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
  }

}
