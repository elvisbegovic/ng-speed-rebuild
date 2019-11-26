import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B59RoutingModule } from './b59-routing.module';
import { B59Component } from './b59.component';


@NgModule({
  declarations: [B59Component],
  imports: [
    CommonModule,
    B59RoutingModule
  ]
})
export class B59Module { }
