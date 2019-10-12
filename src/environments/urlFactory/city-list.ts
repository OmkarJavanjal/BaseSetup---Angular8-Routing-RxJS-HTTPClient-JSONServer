import { AppBase } from './AppBase';

export class CityListURL extends AppBase {

    getUrls() {
      return {
        // getcities: this.getMockUrl() + 'courses',
        // logs: this.getMockUrl() + 'logs'
        getcities: {url: this.getMockUrl() + 'courses', httpMethod: 'GET'},
        logs: {url: this.getMockUrl() + 'logs', httpMethod: 'GET'}
      };
    }
  
}