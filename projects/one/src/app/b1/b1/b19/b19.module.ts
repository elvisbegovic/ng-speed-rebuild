import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B19RoutingModule} from './b19-routing.module';
import {B19Component} from './b19.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B19Component],
  imports: [
    CommonModule,
    B19RoutingModule,
    OneSharedModule
  ]
})
export class B19Module { }
