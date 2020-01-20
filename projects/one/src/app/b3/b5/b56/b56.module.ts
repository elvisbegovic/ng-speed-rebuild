import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B56RoutingModule } from './b56-routing.module';
import { B56Component } from './b56.component';


@NgModule({
  declarations: [B56Component],
  imports: [
    CommonModule,
    B56RoutingModule
  ]
})
export class B56Module { }
