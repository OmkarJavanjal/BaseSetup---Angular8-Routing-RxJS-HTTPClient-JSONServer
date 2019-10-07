import { Injectable } from '@angular/core';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseErrorHandlerService {

  constructor() { }

  public isServiceResponseHasError(response): boolean {
    // handle DP error returned from Service  call response
    if (response &&
      (response['DataPower Service Name'] ||
        response['DataPower Error Code'] ||
        response['Error Message'])) {
      return true;
    } else if (response && !response.errorMessage
      && !response.errorCode
      && (!response.errorList || response.errorList.length === 0)) {
      return false ;
    } else {
      return true ;
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`+
        `url was: ${error.url}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
