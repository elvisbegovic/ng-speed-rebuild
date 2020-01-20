import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A19RoutingModule } from './a19-routing.module';
import { A19Component } from './a19.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A19Component],
  imports: [
    CommonModule,
    A19RoutingModule,
    OneSharedModule
  ]
})
export class A19Module { }
