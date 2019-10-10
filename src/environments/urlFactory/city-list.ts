import { AppBase } from './AppBase';

export class CityListURL extends AppBase {

    getUrls() {
      return {
        getcities: this.getMockUrl() + 'courses',
        logs: this.getMockUrl() + 'logs'
      };
    }
  
}