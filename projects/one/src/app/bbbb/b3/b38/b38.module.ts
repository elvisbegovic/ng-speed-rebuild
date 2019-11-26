import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B38RoutingModule } from './b38-routing.module';
import { B38Component } from './b38.component';


@NgModule({
  declarations: [B38Component],
  imports: [
    CommonModule,
    B38RoutingModule
  ]
})
export class B38Module { }
