import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B4RoutingModule } from './b4-routing.module';
import { B4Component } from './b4.component';


@NgModule({
  declarations: [B4Component],
  imports: [
    CommonModule,
    B4RoutingModule
  ]
})
export class B4Module { }
