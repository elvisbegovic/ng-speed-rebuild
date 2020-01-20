import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A5RoutingModule } from './a5-routing.module';
import { A5Component } from './a5.component';


@NgModule({
  declarations: [A5Component],
  imports: [
    CommonModule,
    A5RoutingModule
  ]
})
export class A5Module { }
