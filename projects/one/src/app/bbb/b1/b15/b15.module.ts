import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B15RoutingModule} from './b15-routing.module';
import {B15Component} from './b15.component';
import {OneSharedModule} from '../../../one-shared/one-shared.module';


@NgModule({
  declarations: [B15Component],
  imports: [
    CommonModule,
    B15RoutingModule,
    OneSharedModule
  ]
})
export class B15Module { }
