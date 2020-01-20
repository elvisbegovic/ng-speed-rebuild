import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A44RoutingModule } from './a44-routing.module';
import { A44Component } from './a44.component';


@NgModule({
  declarations: [A44Component],
  imports: [
    CommonModule,
    A44RoutingModule
  ]
})
export class A44Module { }
