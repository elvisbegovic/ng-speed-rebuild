import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A45RoutingModule } from './a45-routing.module';
import { A45Component } from './a45.component';


@NgModule({
  declarations: [A45Component],
  imports: [
    CommonModule,
    A45RoutingModule
  ]
})
export class A45Module { }
