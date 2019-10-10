import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, retry } from 'rxjs/operators';

import { ResponseErrorHandlerService } from '../ResponseErrorHandler/response-error-handler.service';
import { env } from 'src/environments/environment-loader';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient,
              private responseErrorHandler: ResponseErrorHandlerService) { }

  getWeather(cityName: string) {
    //let configUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName + '&APPID=ae88b071a4ee8a15bad2dea3c30c3c92';
    // return this.httpClient.get(configUrl)
    //   .pipe(
    //     retry(3), // retry a failed request up to 3 times
    //     catchError(this.responseErrorHandler.handleError) // then handle the error
    //   );

    return this.httpClient.get(env.mocking ? env.appWeatherURLs.getForecastUrl2 : env.appWeatherURLs.getForecastUrl + cityName)
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
        error.url = env.mocking ? env.appWeatherURLs.getForecastUrl2 : env.appWeatherURLs.getForecastUrl + cityName;
        //console.log("Inside Catch Handler");
        return this.responseErrorHandler.handleError(error); })
      );

  }

}
