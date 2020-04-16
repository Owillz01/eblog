import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { map, tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
	constructor(private spinner : NgxSpinnerService, public toasterService: ToastrService){}
	intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
		const token : string = localStorage.getItem('token')
		if(token){ 
			this.spinner.show()
			let clonedREq = req.clone({headers: req.headers.set('Authorization', token)})
			// let clonedREq = req.clone({headers: req.headers.set('Authorization', 'API '+token)})
			console.log('token sent', clonedREq)
			return next.handle(clonedREq)
		}else{
			this.spinner.show()
			return next.handle(req);
		}

		// if(!req.headers.has('Content-Type')){
		// let clonedReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')})
		
		// return next.handle(req).pipe(
		// 	map((event: HttpEvent<any>) =>{
		// 		if(event instanceof HttpResponse){
		// 		console.log('http response', event)

		// 		}
		// 		return event
		// 	}))
	}
}