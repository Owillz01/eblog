import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { map, tap, catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
	constructor(private spinner : NgxSpinnerService, public toastr: ToastrService, private router : Router, private activeRoute : ActivatedRoute){}

	handleError(error : HttpErrorResponse ){
				console.log('[ERROR]>>>',error)
				
				return throwError(error)
			}
	intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
		const token : string = localStorage.getItem('token')
   		let slug = this.activeRoute.snapshot.params.slug;
    const favUrl = `https://eblog-api.encentrals.com/api/articles/${slug}/favorite`;
			this.spinner.show()
		if(token){ 
			req = req.clone({headers: req.headers.set('Authorization', token)})
			// let clonedREq = req.clone({headers: req.headers.set('Authorization', 'API '+token)})
			console.log('token sent Rrequest', req)
			// return next.handle(clonedREq)
		}
		
			console.log('Not token sent Rrequest', req)
			let reqMethod = req.method
			// this.spinner.show()
			return next.handle(req).pipe(
				

					tap(  event =>{
						// console.log('[>>>>>Event]', event)
						if(event instanceof HttpResponse){
						
							this.spinner.hide()
							this.toastr.success('Operaton Successful', 'sucess', {positionClass : 'toast-top-center' })
						}

					// catchError(this.handleError)

					},
						error =>{
							if(error instanceof HttpErrorResponse){
								retry(3)
								console.log('Error>>>', error)
								// this.toastr.error(error.message, error.name, { positionClass: 'toast-bottom-center' });
								try{
										this.spinner.hide()

									if(error.status === 422){
										this.router.navigateByUrl('signin')
									
									this.toastr.error(error.error.errors.body[0], 'Login Required', 
										{positionClass : 'toast-top-center' });
									}else{



									return ( this.toastr.error(error.error.errors.body[0], 'Login Required', 
										{positionClass : 'toast-top-center' }));
									}
								}
								catch(e){
										this.spinner.hide()

										this.toastr.error('An error occured. Please try again', '', {positionClass : 'toast-top-center'});
										// this.toastr.success('Hello world!', 'Toastr fun!');
									}
									console.log(error)
							} 
						}
					),

						

				);
		
			// !req.headers.has('Content-Type'))/{
		// let clonedReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')})
		
		// return next.handle(req).pipe(
		// 	map((event: HttpEvent<any>) =>{
		// 		if(event instanceof HttpResponse){
		// 		console.log('http response', event)

		// 		}
		// 		return event
		// 	}))
	}


		// if(
}