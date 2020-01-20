import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A14RoutingModule } from './a14-routing.module';
import { A14Component } from './a14.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A14Component],
  imports: [
    CommonModule,
    A14RoutingModule,
    OneSharedModule
  ]
})
export class A14Module { }
