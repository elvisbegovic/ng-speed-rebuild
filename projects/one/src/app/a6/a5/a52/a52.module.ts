import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A52RoutingModule} from './a52-routing.module';
import {A52Component} from './a52.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [A52Component],
  imports: [
    CommonModule,
    A52RoutingModule,
    OneSharedModule
  ]
})
export class A52Module { }
