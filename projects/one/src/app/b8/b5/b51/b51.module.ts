import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B51RoutingModule } from './b51-routing.module';
import { B51Component } from './b51.component';


@NgModule({
  declarations: [B51Component],
  imports: [
    CommonModule,
    B51RoutingModule
  ]
})
export class B51Module { }
