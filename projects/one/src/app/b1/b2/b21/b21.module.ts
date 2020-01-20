import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B21RoutingModule} from './b21-routing.module';
import {B21Component} from './b21.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B21Component],
  imports: [
    CommonModule,
    B21RoutingModule,
    OneSharedModule
  ]
})
export class B21Module { }
