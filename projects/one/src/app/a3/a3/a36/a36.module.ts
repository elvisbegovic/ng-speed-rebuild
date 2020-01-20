import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A36RoutingModule } from './a36-routing.module';
import { A36Component } from './a36.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A36Component],
  imports: [
    CommonModule,
    A36RoutingModule,
    OneSharedModule
  ]
})
export class A36Module { }
