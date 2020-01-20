import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A34RoutingModule } from './a34-routing.module';
import { A34Component } from './a34.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A34Component],
  imports: [
    CommonModule,
    A34RoutingModule,
    OneSharedModule
  ]
})
export class A34Module { }
