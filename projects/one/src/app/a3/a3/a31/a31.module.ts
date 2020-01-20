import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A31RoutingModule } from './a31-routing.module';
import { A31Component } from './a31.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A31Component],
  imports: [
    CommonModule,
    A31RoutingModule,
    OneSharedModule
  ]
})
export class A31Module { }
