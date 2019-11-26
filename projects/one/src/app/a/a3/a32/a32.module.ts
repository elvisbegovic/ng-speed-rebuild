import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A32RoutingModule } from './a32-routing.module';
import { A32Component } from './a32.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A32Component],
  imports: [
    CommonModule,
    A32RoutingModule,
    OneSharedModule
  ]
})
export class A32Module { }
