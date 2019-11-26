import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B34RoutingModule } from './b34-routing.module';
import { B34Component } from './b34.component';


@NgModule({
  declarations: [B34Component],
  imports: [
    CommonModule,
    B34RoutingModule
  ]
})
export class B34Module { }
