import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B55RoutingModule } from './b55-routing.module';
import { B55Component } from './b55.component';


@NgModule({
  declarations: [B55Component],
  imports: [
    CommonModule,
    B55RoutingModule
  ]
})
export class B55Module { }
