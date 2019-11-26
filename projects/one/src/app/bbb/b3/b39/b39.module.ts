import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B39RoutingModule } from './b39-routing.module';
import { B39Component } from './b39.component';


@NgModule({
  declarations: [B39Component],
  imports: [
    CommonModule,
    B39RoutingModule
  ]
})
export class B39Module { }
