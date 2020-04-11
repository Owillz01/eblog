import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
	intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
		const token : string = localStorage.getItem('token')
		if(token){
			let clonedREq = req.clone({headers: req.headers.set('Authorization', 'Bearer'+token)})
		}

		// if(!req.headers.has('Content-Type')){
		let clonedReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')})
		
		return next.handle(req).pipe(
			map((event: HttpEvent<any>) =>{
				if(event instanceof HttpResponse){
				console.log('http response', event)

				}
				return event
			}))
	}
}