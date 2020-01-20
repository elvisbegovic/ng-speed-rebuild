import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A48RoutingModule } from './a48-routing.module';
import { A48Component } from './a48.component';


@NgModule({
  declarations: [A48Component],
  imports: [
    CommonModule,
    A48RoutingModule
  ]
})
export class A48Module { }
