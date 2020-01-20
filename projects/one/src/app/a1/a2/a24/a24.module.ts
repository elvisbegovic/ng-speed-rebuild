import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A24RoutingModule } from './a24-routing.module';
import { A24Component } from './a24.component';


@NgModule({
  declarations: [A24Component],
  imports: [
    CommonModule,
    A24RoutingModule
  ]
})
export class A24Module { }
