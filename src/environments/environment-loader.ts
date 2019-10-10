import {Environment} from './environment'

export class EnvironmentLoader {

  static getEnvironmentFile(): any {
    const url = document.location.hostname;
    let baseUrl = '';
    let mockUrl = '';
    let mockingSet = false;
    const token = '&APPID=ae88b071a4ee8a15bad2dea3c30c3c92';
    const prodState = true;
    let envName = 'local';
    let proxyState = true; 

    if (url.includes('firebase') || url.includes('fire')) {
      baseUrl = 'https://api.openweathermap.org/data/2.5/';
      mockUrl = 'http://localhost:3004/'
      envName = 'prod';
      proxyState = false;
    } else {
        envName = 'local';
        baseUrl = 'https://api.openweathermap.org/data/2.5/';
        mockUrl = 'http://localhost:3004/'
      }
    
    return new Environment(baseUrl, mockUrl, envName, mockingSet, prodState, proxyState, token).getEnv();
  }
}

export let env: any = EnvironmentLoader.getEnvironmentFile();
