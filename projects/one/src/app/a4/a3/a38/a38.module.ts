import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A38RoutingModule } from './a38-routing.module';
import { A38Component } from './a38.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A38Component],
  imports: [
    CommonModule,
    A38RoutingModule,
    OneSharedModule
  ]
})
export class A38Module { }
