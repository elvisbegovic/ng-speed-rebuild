import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A41RoutingModule } from './a41-routing.module';
import { A41Component } from './a41.component';


@NgModule({
  declarations: [A41Component],
  imports: [
    CommonModule,
    A41RoutingModule
  ]
})
export class A41Module { }
