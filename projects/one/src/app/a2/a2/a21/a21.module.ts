import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A21RoutingModule } from './a21-routing.module';
import { A21Component } from './a21.component';


@NgModule({
  declarations: [A21Component],
  imports: [
    CommonModule,
    A21RoutingModule
  ]
})
export class A21Module { }
