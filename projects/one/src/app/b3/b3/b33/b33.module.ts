import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B33RoutingModule } from './b33-routing.module';
import { B33Component } from './b33.component';


@NgModule({
  declarations: [B33Component],
  imports: [
    CommonModule,
    B33RoutingModule
  ]
})
export class B33Module { }
