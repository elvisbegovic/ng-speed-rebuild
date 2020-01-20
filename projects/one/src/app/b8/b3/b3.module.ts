import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B3RoutingModule } from './b3-routing.module';
import { B3Component } from './b3.component';


@NgModule({
  declarations: [B3Component],
  imports: [
    CommonModule,
    B3RoutingModule
  ]
})
export class B3Module { }
