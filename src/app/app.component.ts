import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './shared/services/weather-service.service';
import { GetCityListService } from './shared/services/get-city-list.service';
import { env } from 'src/environments/environment-loader';
import { GenericServiceService } from './shared/services/generic-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularWeatherApp';

  constructor(private weatherService: WeatherServiceService,
              private getCityListService: GetCityListService,
              private genericService: GenericServiceService) {}

  ngOnInit() {
    
    // this.weatherService.getWeather('Pune').subscribe(data => console.log('weather data', data));
    // this.getCityListService.getCityList().subscribe(data => console.log('city data', data));


    // this.genericService.getServiceResponse(env.mocking? env.appWeatherURLs.getForecastUrl2 : env.appWeatherURLs.getForecastUrl,'Pune').subscribe(data => console.log('weather data', data));
    // this.genericService.getServiceResponse(env.cityList.getcities).subscribe(data => console.log('city data', data));
  }
}
