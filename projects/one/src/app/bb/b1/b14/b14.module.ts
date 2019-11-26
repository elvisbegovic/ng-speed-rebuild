import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B14RoutingModule} from './b14-routing.module';
import {B14Component} from './b14.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B14Component],
  imports: [
    CommonModule,
    B14RoutingModule,
    OneSharedModule
  ]
})
export class B14Module { }
