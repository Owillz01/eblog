import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 baseUrl = 'https://eblog-api.encentrals.com/api';
  constructor(private http : HttpClient) { }

  getArticles(): Observable<any> {
  	const url = `${this.baseUrl}/articles`;
  	return this.http.get(url)
  }
}
