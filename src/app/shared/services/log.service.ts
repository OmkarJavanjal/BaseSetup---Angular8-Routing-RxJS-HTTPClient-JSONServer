import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  messages: string[] = [];

  constructor() { }

  addMessage(message: string) {
    this.messages.push(message);
    console.log('Logged Messages: ', this.messages);
  }

  clear() {
    this.messages = [];
  }
}
