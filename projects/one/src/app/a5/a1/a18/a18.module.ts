import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A18RoutingModule } from './a18-routing.module';
import { A18Component } from './a18.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A18Component],
  imports: [
    CommonModule,
    A18RoutingModule,
    OneSharedModule
  ]
})
export class A18Module { }
