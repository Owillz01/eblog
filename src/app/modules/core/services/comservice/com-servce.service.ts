import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComServceService {

baseUrl = 'https://eblog-api.encentrals.com/api';

  constructor( private http : HttpClient) { }

  createArticleComment(slug, body) : Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}/comments`;
  	return this.http.post(url, body)
  }

  getArticleComments(slug): Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}/comments`;
  	return this.http.get(url)	
  }

  deleteArticleComment(slug, id):Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}/comments/${id}`;
  	return this.http.delete(url)
  }
}
