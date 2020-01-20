import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B58RoutingModule } from './b58-routing.module';
import { B58Component } from './b58.component';


@NgModule({
  declarations: [B58Component],
  imports: [
    CommonModule,
    B58RoutingModule
  ]
})
export class B58Module { }
