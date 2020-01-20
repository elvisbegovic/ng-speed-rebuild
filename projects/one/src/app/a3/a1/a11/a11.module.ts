import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A11RoutingModule } from './a11-routing.module';
import { A11Component } from './a11.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A11Component],
  imports: [
    CommonModule,
    A11RoutingModule,
    OneSharedModule
  ]
})
export class A11Module { }
