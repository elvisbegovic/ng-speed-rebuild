import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A22RoutingModule } from './a22-routing.module';
import { A22Component } from './a22.component';


@NgModule({
  declarations: [A22Component],
  imports: [
    CommonModule,
    A22RoutingModule
  ]
})
export class A22Module { }
