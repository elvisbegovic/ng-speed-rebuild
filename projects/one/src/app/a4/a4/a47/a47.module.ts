import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A47RoutingModule } from './a47-routing.module';
import { A47Component } from './a47.component';


@NgModule({
  declarations: [A47Component],
  imports: [
    CommonModule,
    A47RoutingModule
  ]
})
export class A47Module { }
