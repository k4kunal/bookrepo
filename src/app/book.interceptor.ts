import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class BookInterceptor implements HttpInterceptor{
    intercept (req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
        const authReq = req.clone({
            headers : req.headers.set('Authorization', 'new token')
        });
        return next.handle(authReq);
    }
}