import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ResponseErrorHandlerService } from '../response-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient,
              private responseErrorHandler: ResponseErrorHandlerService) { }

  getWeather(cityName: string) {
    let configUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName + '&APPID=ae88b071a4ee8a15bad2dea3c30c3c92';
    
    return this.http.get(configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.responseErrorHandler.handleError) // then handle the error
      );
  }


  

}
