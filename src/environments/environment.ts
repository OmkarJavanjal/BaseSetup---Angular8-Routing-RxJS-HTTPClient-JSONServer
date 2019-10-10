import { AppWeatherURLs } from './urlFactory/appWeatherURLs';
import { CityListURL } from './urlFactory/city-list';

export class Environment {
  constructor(
              private baseUrl: string,
              private mockUrl: string,
              private envName: string,
              private mockingSet: boolean,
              private prodState: boolean,
              private proxyState: boolean,
              private token: string
              ) {
  }

  getEnv() {
    return {
      //Common Application parameters
      production: this.prodState,
      mocking: this.mockingSet,
      envName: this.envName,
      baseUrl: this.baseUrl,
      mockUrl: this.mockUrl,
      proxyState: this.proxyState,
      token: this.token,

      //New way to incorporate the services
      appWeatherURLs: new AppWeatherURLs(this.baseUrl, this.mockUrl, this.envName).getUrls(),
      cityList: new CityListURL(this.baseUrl, this.mockUrl, this.envName).getUrls()
    };
  }
}

export const environment = {
  production: false
};