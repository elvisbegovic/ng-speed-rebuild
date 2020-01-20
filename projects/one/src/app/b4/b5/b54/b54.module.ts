import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B54RoutingModule } from './b54-routing.module';
import { B54Component } from './b54.component';


@NgModule({
  declarations: [B54Component],
  imports: [
    CommonModule,
    B54RoutingModule
  ]
})
export class B54Module { }
