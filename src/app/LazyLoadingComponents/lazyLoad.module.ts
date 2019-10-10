import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { Component1 } from './component1';
import { Component2 } from './component2';
import { Component3 } from './component3';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LazyRoutingModule
  ],
  declarations: [
      Component1,
      Component2,
      Component3
  ]
})
export class LazyLoadModule {}

