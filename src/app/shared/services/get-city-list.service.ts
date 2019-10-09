import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { ResponseErrorHandlerService } from '../ResponseErrorHandler/response-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityListService {

  constructor(private httpClient: HttpClient,
    private responseErrorHandler: ResponseErrorHandlerService) { }

    getCityList(){
      let configUrl = 'http://localhost:3004/courses';
    

      return this.httpClient.get(configUrl)
      .pipe(
       map(
        (response: Response) => {
          if (!this.responseErrorHandler.isServiceResponseHasError(response)) {
            //console.log("From Service:: Requested data available");
            return response;
          } else {
            // console.log("From Service:: Service returned error with 200");
            throw response;
          }
        }
      ),   
      catchError((error: any) => {
        error.url = configUrl;
        //console.log("Inside Catch Handler");
        return this.responseErrorHandler.handleError(error); })
      );

    }
  
}

