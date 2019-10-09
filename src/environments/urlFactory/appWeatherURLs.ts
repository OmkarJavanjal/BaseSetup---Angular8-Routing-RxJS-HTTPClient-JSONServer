import { AppBase } from './AppBase';

export class AppWeatherURLs extends AppBase {

    getUrls() {
      return {
        getForecastUrl: this.getBaseUrl() + 'forecast?q=',
        getForecastUrl2: this.getMockUrl() + 'forecast'
      };
    }
  
}