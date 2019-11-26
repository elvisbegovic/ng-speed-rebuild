import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B52RoutingModule } from './b52-routing.module';
import { B52Component } from './b52.component';


@NgModule({
  declarations: [B52Component],
  imports: [
    CommonModule,
    B52RoutingModule
  ]
})
export class B52Module { }
