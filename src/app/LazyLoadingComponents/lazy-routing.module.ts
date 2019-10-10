import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1 } from './component1';
import { Component2 } from './component2';
import { Component3 } from './component3';

const lazyRoutes: Routes = [
  {
    path: '',
    component: Component1,
    children: [
      {
        path: 'component2',
        component: Component2,
        children: [
          {
            path: 'component3',
            component: Component3
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }
