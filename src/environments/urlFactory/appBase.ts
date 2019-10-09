
export class AppBase {
    constructor(private baseUrl: string, private mockUrl: string, private envName: string) {}
  
  
    // getClientId(id) {
    //   let targetEnv;
    //   switch (this.envName) {
    //     case 'qa':
    //       targetEnv = '&target_env=qa3';
    //       break;
    //     case 'ltd2':
    //       targetEnv = '&target_env=LTD2';
    //       break;
    //     case 'ltd3':
    //       targetEnv = '&target_env=LTD3';
    //       break;
    //     case 'pte':
    //       targetEnv = '&target_env=pte';
    //       break;
    //     default:
    //       targetEnv = '&target_env=LTD2';
    //       break;
    //   }
    //   return 'client_id=' + targetEnv;
    // }
  
    getBaseUrl() {
      return this.baseUrl;
    }

    getMockUrl() {
        return this.mockUrl;
      }
  
    getEnvName() {
      return this.envName;
    }
  
  }
  