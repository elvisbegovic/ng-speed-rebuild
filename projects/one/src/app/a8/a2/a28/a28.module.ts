import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A28RoutingModule } from './a28-routing.module';
import { A28Component } from './a28.component';


@NgModule({
  declarations: [A28Component],
  imports: [
    CommonModule,
    A28RoutingModule
  ]
})
export class A28Module { }
