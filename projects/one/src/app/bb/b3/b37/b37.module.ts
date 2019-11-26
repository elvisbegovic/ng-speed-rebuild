import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B37RoutingModule } from './b37-routing.module';
import { B37Component } from './b37.component';


@NgModule({
  declarations: [B37Component],
  imports: [
    CommonModule,
    B37RoutingModule
  ]
})
export class B37Module { }
