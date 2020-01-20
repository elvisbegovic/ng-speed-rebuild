import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A12RoutingModule } from './a12-routing.module';
import { A12Component } from './a12.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A12Component],
  imports: [
    CommonModule,
    A12RoutingModule,
    OneSharedModule
  ]
})
export class A12Module { }
