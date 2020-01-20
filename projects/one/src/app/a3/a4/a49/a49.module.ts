import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A49RoutingModule } from './a49-routing.module';
import { A49Component } from './a49.component';


@NgModule({
  declarations: [A49Component],
  imports: [
    CommonModule,
    A49RoutingModule
  ]
})
export class A49Module { }
