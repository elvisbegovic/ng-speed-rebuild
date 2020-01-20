import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A2RoutingModule } from './a2-routing.module';
import { A2Component } from './a2.component';


@NgModule({
  declarations: [A2Component],
  imports: [
    CommonModule,
    A2RoutingModule
  ]
})
export class A2Module { }
