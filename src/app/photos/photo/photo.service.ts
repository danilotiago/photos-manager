import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Photo } from './photo.model';
import { NewPhoto } from '../photo-form/new-photo.model';
import { PhotoComment } from './../photo-details/photo-comments/photo-comment.model';
import { map, catchError } from 'rxjs/operators';

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

  upload(newPhoto: NewPhoto): Observable<any> {
    const formData = new FormData();
    formData.append('description', newPhoto.description);
    formData.append('allowComments', newPhoto.allowComments ? 'true' : 'false');
    formData.append('imageFile', newPhoto.file);

    return this.http.post(`${API}/photos/upload`, formData);
  }

  findById(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(`${API}/photos/${photoId}`);
  }

  removePhoto(photoId: number): Observable<Object> {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  getComments(photoId: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string): Observable<any> {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  like(photoId: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      // mapeia a resposta para true, logo, retornara um observable de true com map()
      .pipe(map(res => true))
      // captura o erro da resposta caso houver com catchError()
      .pipe(catchError(err => {
        // caso o erro for um conhecido 304 (nao modificado)
        if (err.status == '304') {
          // retorna um observable de false
          // of() => cria um observable que retorna o valor que passamos por parametro
          return of(false);
        } else {
          // caso contrario, lanca o erro retornado
          throwError(err);
        } 
      }));
  }
}
