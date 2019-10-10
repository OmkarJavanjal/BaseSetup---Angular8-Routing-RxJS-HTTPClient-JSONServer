import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { ResponseErrorHandlerService } from '../ResponseErrorHandler/response-error-handler.service';
import { env } from 'src/environments/environment-loader';

@Injectable({
  providedIn: 'root'
})
export class GetCityListService {

  constructor(private httpClient: HttpClient,
    private responseErrorHandler: ResponseErrorHandlerService) { }

    getCityList(){
      return this.httpClient.get(env.cityList.getcities)
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
        error.url = env.cityList.getcities;
        //console.log("Inside Catch Handler");
        return this.responseErrorHandler.handleError(error); })
      );

    }
  
}

