import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A42RoutingModule } from './a42-routing.module';
import { A42Component } from './a42.component';


@NgModule({
  declarations: [A42Component],
  imports: [
    CommonModule,
    A42RoutingModule
  ]
})
export class A42Module { }
