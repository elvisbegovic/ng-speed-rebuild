import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A23RoutingModule } from './a23-routing.module';
import { A23Component } from './a23.component';


@NgModule({
  declarations: [A23Component],
  imports: [
    CommonModule,
    A23RoutingModule
  ]
})
export class A23Module { }
