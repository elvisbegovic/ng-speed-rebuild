import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A39RoutingModule } from './a39-routing.module';
import { A39Component } from './a39.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A39Component],
  imports: [
    CommonModule,
    A39RoutingModule,
    OneSharedModule
  ]
})
export class A39Module { }
