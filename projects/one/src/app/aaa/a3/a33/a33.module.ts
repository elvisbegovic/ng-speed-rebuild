import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A33RoutingModule } from './a33-routing.module';
import { A33Component } from './a33.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A33Component],
  imports: [
    CommonModule,
    A33RoutingModule,
    OneSharedModule
  ]
})
export class A33Module { }
