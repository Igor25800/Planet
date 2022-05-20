import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import {EMPTY, Observable} from 'rxjs';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  name = req.clone({ url: `https://swapi.dev/api${req.url}`, headers: req.headers.append('Authorization', 'igor')  })
    return  next.handle(name)
  }
}
