import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 baseUrl = 'https://eblog-api.encentrals.com/api';
 public article;
  constructor(private http : HttpClient) { }

// GET ALL ARTICLES IN THE DATABASE.
  getArticles(): Observable<any> {
  	const url = `${this.baseUrl}/articles`;
  	return this.http.get(url)
  }

// CREAT NEW ARTICLE. AUTH REQUIRED
  createArticle(data): Observable<any>{
  	const url = `${this.baseUrl}/articles`;
  	return this.http.post(url, data)
  }

//DELETE AN ARTICLE. VISIBLE TO AUTHORS ALONE
  deleteArticle(slug): Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}`;
  	return this.http.delete(url)
  }

// GET A SINGLE ARTICLE
  getArticle(slug): Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}`;
  	return this.http.get(url)
  }

// GRT ARTICLES OF USERS YOU FOLLOW
  getArticlesFeed(): Observable<any>{
  	const url = `${this.baseUrl}/articles/feed`;
  	return this.http.get(url)
  }

// UPDATE ARTICLE. AUTH REQUIRED
  updateArticle(slug, editedData): Observable<any>{
  	const url = `${this.baseUrl}/articles/${slug}`;
  	return this.http.put(url, editedData)
  }

  // FAV AN ARTICLE
  createArticleFavorite(slug): Observable<any>{
    const url = `${this.baseUrl}/articles/${slug}/favorite`; 
    const slugUrl = `${this.baseUrl}/articles/${slug}`; 
    return this.http.post(url, slugUrl)
  }

  
  deleteArticleFavorite(slug): Observable<any>{
    const url = `${this.baseUrl}/articles/${slug}/favorite`; 
    // const slugUrl = `${this.baseUrl}/articles/${slug}`; 
    return this.http.delete(url)
  }

  // GET TAGS
  tagsGet():Observable<any>{
    const url = `${this.baseUrl}/tags`;
    return this.http.get(url);
  }
}
