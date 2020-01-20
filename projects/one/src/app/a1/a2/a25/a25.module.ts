import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A25RoutingModule } from './a25-routing.module';
import { A25Component } from './a25.component';


@NgModule({
  declarations: [A25Component],
  imports: [
    CommonModule,
    A25RoutingModule
  ]
})
export class A25Module { }
