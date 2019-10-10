import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment-loader';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  messages: string[] = [];
  public obj;
  constructor(private httpClient: HttpClient) { }

  addMessage(message: string) {
    this.messages.push(message);
    console.log('Logged Messages: ', this.messages);
  //   this.obj = {
  //     message
  //   }
  //   console.log('called');
  //   //this.addMsgToDB(this.obj, true);
  //  // this.httpClient.post(env.cityList.logs, this.obj).subscribe(res => {console.log('resp: ', res)})
  }

  // addMsgToDB (msg, flag) {
  //   console.log('called');
  //   if (flag) {
  //     this.httpClient.post(env.cityList.logs, msg).subscribe(res => {console.log('resp: ', res)});
  //   }
  //   flag = false;
  // }

  clear() {
    this.messages = [];
  }
}
