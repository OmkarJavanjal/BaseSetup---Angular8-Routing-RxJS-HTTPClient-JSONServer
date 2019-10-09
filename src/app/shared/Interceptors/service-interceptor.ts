import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { env } from 'src/environments/environment-loader';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(!env.mocking && req.url.includes('openweathermap')) {
      //console.log('inside interceptor', env.mockingSet)
      return next.handle(req.clone({url: req.url.concat(env.token)}));
    } else {
      return next.handle(req);
    }
  }
}
