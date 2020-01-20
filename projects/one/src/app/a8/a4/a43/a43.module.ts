import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A43RoutingModule } from './a43-routing.module';
import { A43Component } from './a43.component';


@NgModule({
  declarations: [A43Component],
  imports: [
    CommonModule,
    A43RoutingModule
  ]
})
export class A43Module { }
