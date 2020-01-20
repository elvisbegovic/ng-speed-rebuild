import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A26RoutingModule } from './a26-routing.module';
import { A26Component } from './a26.component';


@NgModule({
  declarations: [A26Component],
  imports: [
    CommonModule,
    A26RoutingModule
  ]
})
export class A26Module { }
