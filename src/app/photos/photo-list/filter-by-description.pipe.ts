import { Photo } from '../photo/photo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if (! descriptionQuery) {
      return photos;
    }

    return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
  }

}
