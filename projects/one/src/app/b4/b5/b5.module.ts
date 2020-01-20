import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B5RoutingModule } from './b5-routing.module';
import { B5Component } from './b5.component';


@NgModule({
  declarations: [B5Component],
  imports: [
    CommonModule,
    B5RoutingModule
  ]
})
export class B5Module { }
