import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B36RoutingModule } from './b36-routing.module';
import { B36Component } from './b36.component';


@NgModule({
  declarations: [B36Component],
  imports: [
    CommonModule,
    B36RoutingModule
  ]
})
export class B36Module { }
