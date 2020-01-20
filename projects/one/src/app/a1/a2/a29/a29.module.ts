import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A29RoutingModule } from './a29-routing.module';
import { A29Component } from './a29.component';


@NgModule({
  declarations: [A29Component],
  imports: [
    CommonModule,
    A29RoutingModule
  ]
})
export class A29Module { }
