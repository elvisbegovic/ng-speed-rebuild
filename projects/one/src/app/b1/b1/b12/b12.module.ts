import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B12RoutingModule } from './b12-routing.module';
import { B12Component } from './b12.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B12Component],
  imports: [
    CommonModule,
    B12RoutingModule,
    OneSharedModule
  ]
})
export class B12Module { }
