import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './shared/services/weather-service.service';
import { GetCityListService } from './shared/services/get-city-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularWeatherApp';

  constructor(private weatherService: WeatherServiceService,
              private getCityListService: GetCityListService) {}

  ngOnInit() {
    
    this.weatherService.getWeather('Pune').subscribe(data => console.log('data', data));
    this.getCityListService.getCityList().subscribe(data => console.log('data', data));
  }
}
