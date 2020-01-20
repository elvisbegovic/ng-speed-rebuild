import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A37RoutingModule } from './a37-routing.module';
import { A37Component } from './a37.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A37Component],
  imports: [
    CommonModule,
    A37RoutingModule,
    OneSharedModule
  ]
})
export class A37Module { }
