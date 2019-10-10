import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Component2',
  template: `<h1>This is Component2!</h1>
  <div><router-outlet></router-outlet></div>`
})
export class Component2 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
