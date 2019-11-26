import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A17RoutingModule } from './a17-routing.module';
import { A17Component } from './a17.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A17Component],
  imports: [
    CommonModule,
    A17RoutingModule,
    OneSharedModule
  ]
})
export class A17Module { }
