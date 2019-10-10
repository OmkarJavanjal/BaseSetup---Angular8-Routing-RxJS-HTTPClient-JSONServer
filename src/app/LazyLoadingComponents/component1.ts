import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Component1',
  template: `<h1>This is Component1!</h1>
            <div><router-outlet></router-outlet></div>`
})
export class Component1 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
