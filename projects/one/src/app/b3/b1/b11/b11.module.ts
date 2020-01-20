import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B11RoutingModule } from './b11-routing.module';
import { B11Component } from './b11.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B11Component],
  imports: [
    CommonModule,
    B11RoutingModule,
    OneSharedModule
  ]
})
export class B11Module { }
