import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A35RoutingModule } from './a35-routing.module';
import { A35Component } from './a35.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A35Component],
  imports: [
    CommonModule,
    A35RoutingModule,
    OneSharedModule
  ]
})
export class A35Module { }
