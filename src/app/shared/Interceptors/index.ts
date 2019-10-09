import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging-interceptor';
import { ServiceInterceptor } from './service-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ];