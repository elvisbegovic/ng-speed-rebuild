import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A16RoutingModule } from './a16-routing.module';
import { A16Component } from './a16.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A16Component],
  imports: [
    CommonModule,
    A16RoutingModule,
    OneSharedModule
  ]
})
export class A16Module { }
