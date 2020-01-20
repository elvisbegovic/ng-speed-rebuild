import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B57RoutingModule } from './b57-routing.module';
import { B57Component } from './b57.component';


@NgModule({
  declarations: [B57Component],
  imports: [
    CommonModule,
    B57RoutingModule
  ]
})
export class B57Module { }
