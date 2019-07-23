import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';
import { NewPhoto } from '../photo-form/new-photo.model';

const API: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(username: string): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API}/${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(`${API}/${username}/photos`, { params });
  }

  upload(newPhoto: NewPhoto) {
    const formData = new FormData();
    formData.append('description', newPhoto.description);
    formData.append('allowComments', newPhoto.allowComments ? 'true' : 'false');
    formData.append('imageFile', newPhoto.file);

    return this.http.post(`${API}/photos/upload`, formData);
  }
}
