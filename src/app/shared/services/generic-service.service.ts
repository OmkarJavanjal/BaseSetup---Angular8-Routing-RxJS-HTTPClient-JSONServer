import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { ResponseErrorHandlerService } from '../ResponseErrorHandler/response-error-handler.service';
import { env } from 'src/environments/environment-loader';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private httpClient: HttpClient,
    private responseErrorHandler: ResponseErrorHandlerService) { }

    getHTTPMethod(httpMethod,reqURL,reqObj) {
      switch(httpMethod) {
        case 'GET': return this.httpClient.get(reqURL);
        case 'GET2': return this.httpClient.get(reqURL + reqObj);
        case 'POST': return this.httpClient.post(reqURL, reqObj);
        case 'PUT': return this.httpClient.put(reqURL, reqObj);
        case 'DELETE': return this.httpClient.delete(reqURL, reqObj);
      }
    }

    getServiceResponse(req, reqObj = null) {
      console.log('req: ' , req,reqObj);
      return this.getHTTPMethod(req.httpMethod, req.url, reqObj)
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
