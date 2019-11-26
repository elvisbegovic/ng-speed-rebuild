import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A4RoutingModule } from './a4-routing.module';
import { A4Component } from './a4.component';


@NgModule({
  declarations: [A4Component],
  imports: [
    CommonModule,
    A4RoutingModule
  ]
})
export class A4Module { }
