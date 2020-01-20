import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B13RoutingModule} from './b13-routing.module';
import {B13Component} from './b13.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B13Component],
  imports: [
    CommonModule,
    B13RoutingModule,
    OneSharedModule
  ]
})
export class B13Module { }
