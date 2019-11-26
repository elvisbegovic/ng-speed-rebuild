import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B53RoutingModule } from './b53-routing.module';
import { B53Component } from './b53.component';


@NgModule({
  declarations: [B53Component],
  imports: [
    CommonModule,
    B53RoutingModule
  ]
})
export class B53Module { }
