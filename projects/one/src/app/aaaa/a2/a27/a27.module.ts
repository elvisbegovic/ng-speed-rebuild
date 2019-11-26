import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A27RoutingModule } from './a27-routing.module';
import { A27Component } from './a27.component';


@NgModule({
  declarations: [A27Component],
  imports: [
    CommonModule,
    A27RoutingModule
  ]
})
export class A27Module { }
