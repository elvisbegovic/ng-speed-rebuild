import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B32RoutingModule } from './b32-routing.module';
import { B32Component } from './b32.component';


@NgModule({
  declarations: [B32Component],
  imports: [
    CommonModule,
    B32RoutingModule
  ]
})
export class B32Module { }
