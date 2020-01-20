import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B31RoutingModule } from './b31-routing.module';
import { B31Component } from './b31.component';


@NgModule({
  declarations: [B31Component],
  imports: [
    CommonModule,
    B31RoutingModule
  ]
})
export class B31Module { }
