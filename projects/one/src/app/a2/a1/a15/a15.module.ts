import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A15RoutingModule } from './a15-routing.module';
import { A15Component } from './a15.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A15Component],
  imports: [
    CommonModule,
    A15RoutingModule,
    OneSharedModule
  ]
})
export class A15Module { }
