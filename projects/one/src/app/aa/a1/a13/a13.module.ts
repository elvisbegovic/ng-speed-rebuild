import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A13RoutingModule } from './a13-routing.module';
import { A13Component } from './a13.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A13Component],
  imports: [
    CommonModule,
    A13RoutingModule,
    OneSharedModule
  ]
})
export class A13Module { }
