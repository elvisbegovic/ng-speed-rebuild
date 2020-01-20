import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B35RoutingModule } from './b35-routing.module';
import { B35Component } from './b35.component';


@NgModule({
  declarations: [B35Component],
  imports: [
    CommonModule,
    B35RoutingModule
  ]
})
export class B35Module { }
