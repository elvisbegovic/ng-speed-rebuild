import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A46RoutingModule } from './a46-routing.module';
import { A46Component } from './a46.component';


@NgModule({
  declarations: [A46Component],
  imports: [
    CommonModule,
    A46RoutingModule
  ]
})
export class A46Module { }
